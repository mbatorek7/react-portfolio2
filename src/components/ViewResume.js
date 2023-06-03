import React from "react";
import { Document, Page } from 'react-pdf';
import resumePDF from './updated-resume.pdf';

export default function Resume() {
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}