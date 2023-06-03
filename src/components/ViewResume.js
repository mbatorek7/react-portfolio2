import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../images/updated-resume.pdf';

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}