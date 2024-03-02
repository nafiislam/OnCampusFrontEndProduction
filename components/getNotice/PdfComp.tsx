import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp({ pdfFile }: { pdfFile: string }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-auto">
      <Document
        file={"http://localhost:3000/1.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
        className={"bg bg-slate-600"}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <div key={`page_${page}`} className="border border-slate-500 m-4">
                <p>
                  Page {page} of {numPages}
                </p>
                <Page
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            );
          })}
      </Document>
    </div>
  );
}

export default PdfComp;
