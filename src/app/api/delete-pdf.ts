import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import { PineconeClient } from '@pinecone-database/pinecone';
import { getAuth } from '@clerk/nextjs/server';

const pinecone = new PineconeClient(process.env.PINECONE_API_KEY);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { pdfId } = req.body;

  try {
    const pdf = await prisma.pDF.findUnique({
      where: { id: pdfId }
    });

    if (!pdf || pdf.userId !== userId) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    await prisma.pDF.delete({
      where: { id: pdfId }
    });

    // Delete embeddings from Pinecone
    await pinecone.delete({
      namespace: 'pdf-embeddings',
      ids: pdf.text.split(' ').map((_, idx) => `${pdf.id}-${idx}`)
    });

    res.status(200).json({ message: 'PDF deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
}

export default handler;
