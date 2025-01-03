import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`group w-full flex justify-between items-center px-4 py-2 overflow-hidden ${
          note.id === props.currentNote.id
            ? "bg-blue-base !text-white"
            : "text-blue-base"
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h3 className="font-body whitespace-nowrap text-ellipsis overflow-hidden">
          {note.body.split("\n")[0]}
        </h3>
        <button
          className="hidden border-none bg-transparent group-hover:block hover:text-red-400"
          onClick={(event) => props.delete(event, note.id)}
        >
          <i className="gg-trash"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="w-full md:w-[20%] md:h-[60vh] overflow-y-auto">
      <div className="flex justify-between items-center px-4 py-2">
        <h2 className="heading-5 md:heading-6 font-title">Notes</h2>

        <button
          className="bg-blue-base text-white w-7 h-7 rounded-md"
          onClick={props.newNote}
        >
          +
        </button>
      </div>

      {noteElements}
    </div>
  );
}
