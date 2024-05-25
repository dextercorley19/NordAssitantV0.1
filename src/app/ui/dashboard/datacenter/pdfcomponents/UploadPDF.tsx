"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PDFUpload() {
  const [pdfFile, setPDFFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPDFFile(event.target.files[0]);
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!pdfFile) return;

    const formData = new FormData();
    formData.append("pdf", pdfFile);

    try {
      const response = await fetch("/api/pdfs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("PDF uploaded and processed successfully");
        setPDFFile(null);
      } else {
        const errorMessage = await response.text();
        console.error("Error uploading PDF:", errorMessage);
        alert(`Error uploading PDF: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert(
        "An unexpected error occurred while uploading the PDF. Please try again later.",
      );
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <Label htmlFor="pdf-upload">Upload PDF</Label>
      <Input
        id="pdf-upload"
        type="file"
        name="pdf"
        accept=".pdf"
        onChange={handleFileChange}
      />
      <Button type="submit" disabled={!pdfFile}>
        Upload
      </Button>
      {pdfFile && <p>Selected file: {pdfFile.name}</p>}
    </form>
  );
}
