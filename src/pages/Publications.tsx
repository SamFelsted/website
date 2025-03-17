import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Button from 'react-bootstrap/Button';
import PDFNavBar from "../components/PDFNavBar";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer: React.FC = () => {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [selectedPDF, setSelectedPDF] = useState<string>("https://samfelsted.github.io/website/pdfs/ECE341_Project_Report.pdf"); // State for selected PDF
    const [scale, setScale] = useState<number>(1); // Scale factor for the PDF viewer

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () => setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
    const goToNextPage = () => setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));

    const [pdfFiles, setPdfFiles] = useState<{ name: string; link: string }[]>([]);

    useEffect(() => {
        setPdfFiles([
            { name: "ECE 341 Project Report", link: "https://samfelsted.github.io/website/pdfs/ECE341_Project_Report.pdf" },
            { name: "ECE 271 Design Project 2", link: "https://samfelsted.github.io/website/pdfs/ECE_271_Design_Project_2.pdf" },
            { name: "ENGR 100 Report", link: "https://samfelsted.github.io/website/pdfs/samfelstedengr100.pdf" },
            { name: "MeltStakeCommander", link: "https://samfelsted.github.io/website/pdfs/samfelstedengr100.pdf" },
        ]);
    }, []);

    useEffect(() => {
        setPageNumber(1);
    }, [selectedPDF]);

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
                <div className="publicationLayout">
                    <div className="left-nav">
                        <PDFNavBar pdfFiles={pdfFiles} setSelectedPDF={setSelectedPDF} />
                    </div>

                    <div className="pdfView">
                        <div className="pdfBackground">
                            {/* Load the selected PDF */}
                            <Document file={selectedPDF} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber}  scale={scale} />
                            </Document>
                        </div>

                        <div className="button-container">
                            <Button onClick={goToPrevPage} disabled={pageNumber === 1}>Previous</Button>
                            <span> Page {pageNumber} of {numPages} </span>
                            <Button onClick={goToNextPage} disabled={pageNumber === numPages}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PDFViewer;
