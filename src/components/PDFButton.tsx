import React from 'react';
import DownloadButton from "./DownloadButton";

interface PDFButtonProps {
    fileName: string;
    fileLink: string;
    onClick: () => void;
}

const PDFButton: React.FC<PDFButtonProps> = ({ fileName, fileLink, onClick }) => {
    return (
        <>
            <div className="button-container">
                <button onClick={onClick} className="pdf-button">
                    {fileName}
                </button>
                <DownloadButton fileLink={fileLink} fileName={fileName} />
            </div>
        </>
    );
};

export default PDFButton;
