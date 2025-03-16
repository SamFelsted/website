// PDFNavBar.tsx
import React from 'react';
import PDFButton from './PDFButton';

interface PDFNavBarProps {
    pdfFiles: string[]; // List of PDF filenames
    setSelectedPDF: (pdf: string) => void; // Function to update selected PDF
}

const PDFNavBar: React.FC<PDFNavBarProps> = ({ pdfFiles, setSelectedPDF }) => {
    return (
        <div className="sidebar">
            <h2>Works</h2>
            <div className="pdf-buttons">
                {pdfFiles.map((fileName, index) => (
                    <>
                        <PDFButton
                            key={index}
                            fileName={fileName}
                            onClick={() => setSelectedPDF(`${fileName}`)}
                        />
                        <br/>
                    </>
                ))}
            </div>
        </div>
    );
};

export default PDFNavBar;
