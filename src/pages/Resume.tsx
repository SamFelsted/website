import {Document, Page} from "react-pdf";
import React, {useEffect, useState} from "react";
import DownloadButton from "../components/DownloadButton";

function Resume() {
    const [scale, setScale] = useState<number>(1); // Scale factor for the PDF viewer
    const onDocumentLoadSuccess = () => {

    };

    useEffect(() => {
        const updateScale = () => {
            const widthScale = window.innerWidth / 1200; // Example base width

            const newScale = Math.max(Math.min(widthScale, 1), 0.5); // Scale based on both width and height
            setScale(newScale);
        };

        // Initial scale calculation
        updateScale();

        // Add event listener to update scale on window resize
        window.addEventListener("resize", updateScale);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateScale);
        };
    }, []);

    return (
        <>
            <div className="full-page grid-center">
                <div className="resumeView">
                    <div className="pdfBackground">
                        {/* Load the selected PDF */}
                        <Document file={"https://samfelsted.github.io/website/pdfs/resume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={1}  scale={scale} />
                        </Document>
                    </div>
                    <DownloadButton fileName={"resume.pdf"} fileLink={"https://samfelsted.github.io/website/pdfs/resume.pdf"}/>
                </div>
            </div>
        </>
    );
}

export default Resume;