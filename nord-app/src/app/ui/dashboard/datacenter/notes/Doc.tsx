"use client";

import { Docs as DocsModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { useState } from "react";
import AddEditDocDialog from "./AddEditDocDialog";

interface DocProps {
  doc: DocsModel;
}

export default function Doc({ doc }: DocProps) {
    const [showEditDialog, setShowEditDialog] = useState(false);
  const wasUpdated = doc.updatedAt > doc.createdAt;

  const createdUpdatedAtTimestamp = (
    wasUpdated ? doc.updatedAt : doc.createdAt
  ).toDateString();

  return (
    <>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setShowEditDialog(true)}>
        <CardHeader>
            <CardTitle>{doc.title}</CardTitle>
            <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && " (updated)"}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="whitespace-pre-line">{doc.content}</p>
        </CardContent>
        </Card>
        <AddEditDocDialog
            open={showEditDialog}
            setOpen={setShowEditDialog}
            docToEdit={doc}
            />
        </>
  );
}
