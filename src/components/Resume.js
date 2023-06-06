import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../images/updated-resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Resume() {
    const [width, setWidth] = useState(1200);
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Download my resume here!
            </h3>

            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <a className="button" href="../../public/updated-resume.pdf" download="updated-resume.pdf">
                    Download Resume
                </a>
            </button>

            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <Document onError={console.error} file={resumePDF}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </div>
        </div>
    );
}