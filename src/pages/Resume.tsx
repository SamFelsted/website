import {Document, Page} from "react-pdf";
import React from "react";
import {Link} from "react-router-dom";

function Resume() {

    const onDocumentLoadSuccess = () => {

    };


    return (
        <>
            <div className="full-page grid-center">
                <div className="resumeView">
                    <div className="pdfBackground">
                        {/* Load the selected PDF */}
                        <Document file={"https://samfelsted.github.io/website/pdfs/resume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={1}/>
                        </Document>
                    </div>
                    <Link to="https://samfelsted.github.io/website/pdfs/resume.pdf" target="_blank" download className="download-button">Download</Link>
                </div>
            </div>
        </>
    );
}

export default Resume;