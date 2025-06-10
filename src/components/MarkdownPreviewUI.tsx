import { useState } from "react";
import { Eye } from "lucide-react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import MDEditor from "@uiw/react-md-editor";

const MarkdownPreviewUI = ({
  theme,
  printRef,
  handlePrint,
}: {
  theme: "light" | "dark";
  printRef: React.RefObject<HTMLDivElement | null>;
  handlePrint: () => void;
}) => {
  const [markdown, setMarkdown] = useState("");

  const getPageMargins = () => {
    return `@page { margin: 0mm; size:auto; padding:13mm; }`;
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6 flex gap-1 flex-col md:flex-row">
        {/* Editor Section */}
        <MDEditor
          value={markdown}
        //   toolbarHeight={50}
          preview="edit"
          onChange={(value) => setMarkdown(value ?? "")}
          height="600px"
          className="flex-1"
          data-color-mode={theme}
        />
        <div
          className={`w-full flex-1 rounded-sm h-[600px] overflow-y-auto border-2 bg-zinc-950`}
        >
          <h2
            className={`text-sm px-2 py-[3px] border-b font-medium flex items-center text-white`}
          >
            <Eye className="inline w-4 h-4 mr-1" />
            Preview Markdown
          </h2>
          <div className="w-full" ref={printRef}>
            <style>{getPageMargins()}</style>
            <MarkdownPreview source={markdown} style={{ padding: 16 }} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <button
          className="mx-auto bg-zinc-800 hover:bg-zinc-900 text-white font-medium py-2 px-4 rounded transition cursor-pointer"
          onClick={handlePrint}
          disabled={!markdown.trim() || !printRef.current}
          title="Download as PDF"
        >
          Download as PDF
        </button>
      </div>
    </div>
    );
};

export default MarkdownPreviewUI;
