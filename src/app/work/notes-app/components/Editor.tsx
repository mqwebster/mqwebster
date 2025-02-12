import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default function Editor({ currentNote, updateNote }) {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <div className="w-full md:w-[80%] h-[72vh] px-4 py-2 overflow-y-auto">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={40}
        heightUnits="vh"
      />
    </div>
  );
}
