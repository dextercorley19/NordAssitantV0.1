import Doc from "@/app/ui/dashboard/datacenter/notes/Doc";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import UploadNote from "@/app/ui/dashboard/datacenter/tabs";

export default async function DataCenter() {
  //   const [showAddEditDocDialog, setShowAddEditDocDialog] = useState(false);
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");

  const allDocs = await prisma.docs.findMany({ where: { userId } });

  return (
    <div>
      <Breadcrumb className="pb-14">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
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
              <div className="col-span-full text-center">
                {"You don't have any documents yet."}
              </div>
            )}
          </div>{" "}
        </TabsContent>
        <TabsContent value="Documents">Upload your documents here.</TabsContent>
      </Tabs>
    </div>
  );
}
