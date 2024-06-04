from contextlib import asynccontextmanager
import uvicorn
from fastapi import FastAPI, Request
from db import test_pool, pool, get_relevant_docs, create_doc, get_relevant_doc
import requests
import os
from pdfminer.high_level import extract_text
from dotenv import load_dotenv

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


@app.get("/documents/{id}")
async def get_docs(id: str):
    results = await get_relevant_docs(id)
    return results


@app.get("/document/{id}")
async def get_docs(id: str):
    res = await get_relevant_doc(id)
    return res


@app.post("/document/{id}")
async def post_doc(id: str, request: Request):
    body = await request.json()
    results = await create_doc(id, body["text"])
    return results


@app.put("/document/{id}")
async def update_doc(id: str, request: Request):
    body = await request.json()
    results = await create_doc(id, body["text"])
    return results


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
        print(text)
        os.remove(filepath)
    else:
        print(f"Uh oh! Could not download {pdf_file_name},")
        print(f"HTTP response status code: {response.status_code}")

    return {"message": "File parsed successfully!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
