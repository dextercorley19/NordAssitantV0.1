import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nord Assistant - Docs",
};

export default async function DocsPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allDocs = await prisma.docs.findMany({ where: { userId } });

  return <div>{JSON.stringify(allDocs)}</div>;
}
