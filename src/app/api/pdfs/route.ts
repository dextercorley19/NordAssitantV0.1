import { auth } from '@clerk/nextjs';
import prisma from '@/lib/db/prisma';
import { docsIndex } from '@/lib/db/pinecone';
import { getEmbedding } from '@/lib/openai';
import pdf from 'pdf-parse';

export async function POST(req: Request) {
  try {

    const { userId } = auth();
    if (!userId) {
      console.error('Unauthorized access attempt');
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const pdfFile = formData.get('pdf');

    if (!pdfFile || !(pdfFile instanceof Blob)) {
      console.error('Invalid file type or no file provided');
      return Response.json({ error: 'No PDF file provided or invalid file type' }, { status: 400 });
    }

    const pdfBytes = await pdfFile.arrayBuffer();
    const pdfText = await getPDFText(Buffer.from(pdfBytes));

    if (!pdfText) {
      console.error('Failed to extract text from the PDF file');
      return Response.json({ error: 'Failed to extract text from the PDF file' }, { status: 400 });
    }

    const title = pdfFile.name || 'Untitled PDF';
    const embedding = await getEmbeddingForDoc(title, pdfText);

    const pdfTextDoc = await prisma.$transaction(async (tx) => {
      const pdfTextDoc = await tx.pDFtext.create({
        data: {
          title,
          content: pdfText,
          userId,
        },
      });

      await docsIndex.upsert([
        {
          id: pdfTextDoc.id,
          values: embedding,
          metadata: { userId },
        },
      ]);

      return pdfTextDoc;
    });

    return Response.json({ message: 'PDF uploaded and processed successfully', pdfTextDoc }, { status: 201 });
  } catch (error) {
    console.error('Error uploading PDF:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function getPDFText(pdfBytes: Buffer): Promise<string | null> {
  try {
    const pdfData = await pdf(pdfBytes);
    return pdfData.text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return null;
  }
}

async function getEmbeddingForDoc(title: string, content: string) {
  return getEmbedding(title + "\n\n" + content ?? "");
}
