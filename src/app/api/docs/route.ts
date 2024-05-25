import { docsIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import { getEmbedding } from "@/lib/openai";
import {
  createDocSchema,
  updateDocSchema,
  deleteDocSchema,
} from "@/lib/validation/doc";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {

  try {
    const body = await req.json();

    const parseResult = createDocSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { title, content } = parseResult.data;

    const { userId } = auth();

    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const embedding = await getEmbeddingForDoc(title, content);

    const doc = await prisma.$transaction(async (tx) => {
      const doc = await tx.docs.create({
        data: {
          title,
          content,
          userId,
        },
      });

      await docsIndex.upsert([
        {
          id: doc.id,
          values: embedding,
          metadata: { userId },
        },
      ]);

      return doc;
    });

    return Response.json({ doc }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const parseResult = updateDocSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { id, title, content } = parseResult.data;

    const docs = await prisma.docs.findUnique({ where: { id } });

    if (!docs) {
      return Response.json({ error: "Document not found" }, { status: 404 });
    }

    const { userId } = auth();

    if (!userId || userId !== docs.userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const embedding = await getEmbeddingForDoc(title, content);

    const updatedDoc = await prisma.$transaction(async (tx) => {
      const updatedDoc = await tx.docs.update({
        where: { id },
        data: {
          title,
          content,
        },
      });

      await docsIndex.upsert([
        {
          id,
          values: embedding,
          metadata: { userId },
        },
      ]);

      return updatedDoc;
    });

    return Response.json({ updatedDoc }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    const parseResult = deleteDocSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { id } = parseResult.data;

    const docs = await prisma.docs.findUnique({ where: { id } });

    if (!docs) {
      return Response.json({ error: "Document not found" }, { status: 404 });
    }

    const { userId } = auth();

    if (!userId || userId !== docs.userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.docs.delete({ where: { id } });
      await docsIndex.deleteOne(id);
    });

    return Response.json({ message: "Doc deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function getEmbeddingForDoc(title: string, content: string | undefined) {
  return getEmbedding(title + "\n\n" + content ?? "");
}
