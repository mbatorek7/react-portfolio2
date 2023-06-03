import React from "react";
import { Document } from 'react-pdf';

export default function Resume() {
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <Document file="./updated-resume.pdf" onLoadSuccess={onDocumentLoadSuccess}></Document>
        </div>
    );
}