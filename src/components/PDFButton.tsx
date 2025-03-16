// PDFButton.tsx
import React from 'react';
import {Link} from "react-router-dom";

interface PDFButtonProps {
    fileName: string;
    onClick: () => void;
}

const PDFButton: React.FC<PDFButtonProps> = ({ fileName, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="pdf-button">
                {fileName}
            </button>
            <Link to={"/pdfs/" + fileName} target="_blank" download className="download-button">Download</Link>
        </>
    );
};

export default PDFButton;
