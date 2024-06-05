import os
import uvicorn
import requests
import nltk
import uuid
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from db import test_pool, pool
from chunk import Chunker
from pdfminer.high_level import extract_text, extract_text_to_fp
from pdfminer.layout import LAParams
from dotenv import load_dotenv
from io import StringIO
from openai import OpenAI

from pinecone import Pinecone

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await pool.open()
        yield
    finally:
        await pool.close()


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def test_db():
    results = await test_pool()
    return results


@app.post("/chunk")
async def test_chunk(request: Request):
    pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
    index = pc.Index("pdf-server")

    body = await request.json()
    user_id = body["userId"]

    chunker = Chunker()
    output_string = StringIO()
    with open("./PenaltyBoxIII-OperatingManual.pdf", "rb") as fin:
        extract_text_to_fp(
            fin, output_string, laparams=LAParams(), output_type="text", codec=None
        )  # can be 'html', 'xml', 'text', 'tag'

    # Get the extracted text
    extracted_text = output_string.getvalue()

    # tokenize the text
    tokens = nltk.word_tokenize(extracted_text)

    grouped_dict = chunker.group_words(tokens)

    cleaned_dict = chunker.clean_groups(grouped_dict)

    api_key = os.getenv("OPENAI_API_KEY")

    client = OpenAI()
    vectors = []
    for key, value in cleaned_dict.items():
        chunk_embeddings = (
            client.embeddings.create(
                model="text-embedding-ada-002",
                input=value,
                encoding_format="float",
            )
            .data[0]
            .embedding
        )
        vector_obj = {
            "id": str(uuid.uuid4()),
            "values": chunk_embeddings,
            "metadata": {"key": key, "user_id": user_id},
        }
        vectors.append(vector_obj)

    index.upsert(
        vectors,
        namespace=chunker.filename,
    )
    # TODO: save group_num to db individually
    # create postgres db connection
    # Store the embeddings in the database, uniquely identified by the user_id, file_name, and embedding_key (value from cleaned_dict)
    # TODO: create embeddigns table in db


@app.post("/parse-pdf")
async def save_pdf(request: Request):
    body = await request.json()
    response = requests.get(body["pdfUrl"], stream=True)
    # isolate PDF filename from URL
    pdf_file_name = os.path.basename("test.pdf")
    if response.status_code == 200:
        # Save in current working directory
        filepath = os.path.join(os.getcwd(), pdf_file_name)
        with open(filepath, "wb") as pdf_object:
            pdf_object.write(response.content)
            print(f"{pdf_file_name} was successfully saved!")
        text = extract_text(filepath)

        os.remove(filepath)
    else:
        print(f"Uh oh! Could not download {pdf_file_name},")
        print(f"HTTP response status code: {response.status_code}")

    return {"message": "File parsed successfully!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
