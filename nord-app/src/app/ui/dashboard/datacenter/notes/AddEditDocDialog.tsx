import { CreateDocSchema, createDocSchema } from "@/lib/validation/doc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Textarea } from "../../../../../components/ui/textarea";
import LoadingButton from "../../../../../components/ui/loading-button";
import { useRouter } from "next/navigation";
import { Docs } from "@prisma/client";
import { useState } from "react";

interface AddEditDocDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  docToEdit?: Docs;
}

export default function AddEditDocDialog({
  open,
  setOpen,
  docToEdit,
}: AddEditDocDialogProps) {
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const router = useRouter();

  const form = useForm<CreateDocSchema>({
    resolver: zodResolver(createDocSchema),
    defaultValues: {
      title: docToEdit?.title || "",
      content: docToEdit?.content || "",
    },
  });

  async function onSubmit(input: CreateDocSchema) {
    try {
      if (docToEdit) {
        const response = await fetch("/api/docs", {
          method: "PUT",
          body: JSON.stringify({
            id: docToEdit.id,
            ...input,
          }),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
      } else {
        const response = await fetch("/api/docs", {
          method: "POST",
          body: JSON.stringify(input),
        });
        if (!response.ok) throw Error("Status code: " + response.status);
        form.reset();
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  async function deleteDoc() {
    if (!docToEdit) return;
    setDeleteInProgress(true);
    try {
      const response = await fetch("/api/docs", {
        method: "DELETE",
        body: JSON.stringify({
          id: docToEdit.id,
        }),
      });
      if (!response.ok) throw Error("Status code: " + response.status);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeleteInProgress(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{docToEdit ? "Edit Document" : "Add Document"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Document Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Document Content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-1 sm:gap-0">
              {docToEdit && (
                <LoadingButton
                  variant="destructive"
                  loading={deleteInProgress}
                  disabled={form.formState.isSubmitting}
                  onClick={deleteDoc}
                  type="button"
                >
                  Delete Document
                </LoadingButton>
              )}
              <LoadingButton
                type="submit"
                loading={form.formState.isSubmitting}
                disabled={deleteInProgress}
              >
                Submit
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
