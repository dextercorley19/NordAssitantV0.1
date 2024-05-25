import { docsIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import openai, { getEmbedding } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const messagesTruncated = messages.slice(-6);

    const embedding = await getEmbedding(
      messagesTruncated.map((message) => message.content).join("\n"),
    );

    // EX: "What's my wifi password?"
    // Your wifi password is XYZ
    // Turn ^ to 6th message history into an embedding

    const { userId } = auth();

    const vectorQueryResponse = await docsIndex.query({
      vector: embedding,
      topK: 4, // how many results we want to return (in this case how many docs we want to reference (send to chat gpt api) the higher the k the more expensive but better answer in theory (to a point))
      filter: { userId },
    });

    const relevantDocs = await prisma.docs.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });

    const relevantPDFTexts = await prisma.pDFtext.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });

    console.log("Relevant docs found: ", relevantDocs);
    console.log("Relevant PDF texts found: ", relevantPDFTexts);

    const systemMessage: ChatCompletionMessage = {
      role: "assistant",
      content:
        "You are an intelligent assistant that helps the yacht captain with questions about his/her yacht. You answer the user's questions based on the documents they upload about their specific boat. If you cannot find a good enough answer from the documents, please say I need more information about your boat to answer this. " +
        "The relevant documents for this query are:\n " +
        relevantDocs
          .map((doc) => `Title: ${doc.title}\n\nContent:\n${doc.content}`)
          .join("\n\n") +
        "\n\n" +
        relevantPDFTexts
          .map(
            (pdfText) =>
              `Title: ${pdfText.title}\n\nContent:\n${pdfText.content}`,
          )
          .join("\n\n"),
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messagesTruncated],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
