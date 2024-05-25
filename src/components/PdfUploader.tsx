"use client";

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { auth } from '@clerk/nextjs';

const PdfUploader = () => {
  const [pdfs, setPdfs] = useState([]);
  const { userId } = auth();

  const onDrop = async (acceptedFiles: File[]) => {
    const formData = new FormData();
    formData.append("pdf", acceptedFiles[0]);

    try {
      const response = await axios.post<string>("/api/upload-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPdfs([...pdfs, response.data]);
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  const deletePdf = async (pdfId: string) => {
    try {
      await axios.delete('/api/delete-pdf', { data: { pdfId } });
      setPdfs(pdfs.filter((pdf) => pdf.id !== pdfId));
    } catch (error) {
      console.error('Error deleting PDF:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop a PDF here, or click to select one</p>
      </div>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.id}>
            {pdf.fileName}
            <button onClick={() => deletePdf(pdf.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfUploader;
