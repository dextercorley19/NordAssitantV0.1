import Doc from "@/app/ui/dashboard/datacenter/notes/Doc";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadNote from "@/app/ui/dashboard/datacenter/tabs";
import PDFUpload from "@/app/ui/dashboard/datacenter/pdfcomponents/UploadPDF";

export default async function DataCenter() {
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");

  const allDocs = await prisma.docs.findMany({ where: { userId } });

  return (
    <div className="mx-16">
      <Breadcrumb className="mt-4 pb-14">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Center</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="Notes" className="max-w-5xl">
        <TabsList>
          <TabsTrigger value="Notes">Notes</TabsTrigger>
          <TabsTrigger value="Documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="Notes">
          <UploadNote />
          <div className=" grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {allDocs.map((doc) => (
              <Doc doc={doc} key={doc.id} />
            ))}
            {allDocs.length == 0 && (
              <div>{"You don't have any notes yet."}</div>
            )}
          </div>{" "}
        </TabsContent>
        <TabsContent value="Documents">
          <div>
            <PDFUpload />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
