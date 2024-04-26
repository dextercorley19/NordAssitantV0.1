"use client";

import AddEditDocDialog from "@/app/ui/dashboard/datacenter/notes/AddEditDocDialog";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function UploadNote() {
  // const { userId } = auth();
  const [showAddEditDocDialog, setShowAddEditDocDialog] = useState(false);

  // if (!userId) throw Error("userId undefined");

  return (
    <div>
      <Button variant="ghost" className="mt-2 border" onClick={() => setShowAddEditDocDialog(true)}>
        <Plus size={20} className="mr-2" />
        Add Note
      </Button>
      <AddEditDocDialog
        open={showAddEditDocDialog}
        setOpen={setShowAddEditDocDialog}
      />
    </div>
  );
}
