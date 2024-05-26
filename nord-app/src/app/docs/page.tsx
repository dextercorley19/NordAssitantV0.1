import Doc from "@/app/ui/dashboard/datacenter/notes/Doc";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nord Assistant - DataCenter",
};

export default async function DocsPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allDocs = await prisma.docs.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allDocs.map((doc) => (
        <Doc doc={doc} key={doc.id} />
      ))}
      {allDocs.length == 0 && (
        <div className="col-span-full text-center">
          {"You don't have any documents yet."}
        </div>
      )}
    </div>
  );
}
