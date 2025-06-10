import { useState } from "react";
import MarkdownPreviewUI from "./components/MarkdownPreviewUI";

function App() {
  const [theme] = useState<"light" | "dark">("light");

  return (
    <>
      <nav className="bg-zinc-800 shadow-md p-4 lg:px-8 flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">Markdown to PDF</h1>
      </nav>
      <MarkdownPreviewUI theme={theme} />
    </>
  );
}

export default App;
