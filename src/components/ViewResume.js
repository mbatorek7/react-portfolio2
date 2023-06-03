import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../images/updated-resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function ViewResume() {
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <Document onError={console.error} file={resumePDF}>
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
    );
}