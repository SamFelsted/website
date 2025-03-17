import React from "react";

interface DownloadButtonProps {
    fileLink: string;
    fileName?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileLink, fileName }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = fileLink;
        link.setAttribute("download", fileName || "download");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="download-button">
            Download
        </button>
    );
};

export default DownloadButton;
