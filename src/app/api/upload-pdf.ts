import { NextApiRequest, NextApiResponse } from 'next';
import pdfParse from 'pdf-parse';
import { getEmbedding } from "@/lib/openai";
import prisma from "@/lib/db/prisma";
import { docsIndex } from "@/lib/db/pinecone";
import { getAuth } from '@clerk/nextjs/server';

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const pinecone = new PineconeClient(process.env.PINECONE_API_KEY);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const file = req.files?.pdf;
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const pdfBuffer = await file.arrayBuffer();
    const pdfData = await pdfParse(pdfBuffer);
    const text = pdfData.text;
    const textChunks = chunkText(text, 1000); // Chunk text by 1000 characters

    // Store PDF metadata and text in MongoDB using Prisma
    const pdf = await prisma.pDF.create({
      data: {
        userId,
        fileName: file.name,
        text
      }
    });

    // Create embeddings and store them in Pinecone
    for (const chunk of textChunks) {
      const embedding = await openai.embeddings({
        input: chunk,
        model: 'text-embedding-ada-002'
      });
      await pinecone.upsert({
        namespace: 'pdf-embeddings',
        vectors: [{ id: `${pdf.id}-${chunk}`, values: embedding.data[0].embedding }]
      });
    }

    res.status(200).json({ message: 'PDF uploaded and processed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
}

function chunkText(text: string, size: number): string[] {
  const chunks = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
