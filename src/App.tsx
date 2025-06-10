import { useState, useRef } from "react";
import MarkdownPreviewUI from "./components/MarkdownPreviewUI";
import { useReactToPrint } from "react-to-print";

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const [theme] = useState<"light" | "dark">("light");

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Document",
    pageStyle: "",
  });
  return (
    <>
      <nav className="bg-zinc-800 shadow-md p-4 lg:px-8 flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">Markdown to PDF</h1>
        <button
          className="bg-zinc-950 hover:bg-zinc-900 text-white font-medium py-2 px-4 rounded transition"
          onClick={handlePrint}
        >
          Download as PDF
        </button>
      </nav>
      <MarkdownPreviewUI theme={theme} printRef={printRef} handlePrint={handlePrint} />
    </>
  );
}

export default App;
