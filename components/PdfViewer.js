import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// Cấu hình worker của react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };
  return (
    <div
      className=" w-full m-auto justify-items-center"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div style={{ marginTop: "10px" }}>
        <button
          className=" border px-2 rounded"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          Trang trước
        </button>
        <span style={{ margin: "0 10px" }}>
          Trang {pageNumber} / {numPages}
        </span>
        <button
          className=" border px-2 rounded"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
}
