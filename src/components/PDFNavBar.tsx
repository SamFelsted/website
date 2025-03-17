import React from 'react';
import PDFButton from './PDFButton';

interface PDFNavBarProps {
    pdfFiles: { name: string; link: string }[]; // List of PDF filenames and links
    setSelectedPDF: (pdf: string) => void; // Function to update selected PDF
}

const PDFNavBar: React.FC<PDFNavBarProps> = ({ pdfFiles, setSelectedPDF }) => {
    return (
        <div className="sidebar">
            <h2>Works</h2>
            <div className="pdf-buttons">
                {pdfFiles.map((file, index) => (
                    <>
                        <PDFButton
                            key={index}
                            fileName={file.name}
                            fileLink={file.link}
                            onClick={() => setSelectedPDF(file.link)}
                        />
                        <br/>
                    </>
                ))}
            </div>
        </div>
    );
};

export default PDFNavBar;