import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

import "./App.css";

export default function App() {
  // const [notes, setNotes] = useState(
  //   () => JSON.parse(localStorage.getItem("notes")) || []
  // );
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  // useEffect(() => {
  //   window.localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    // Reorder notes on update, most recent at the top
    setNotes((oldNotes) => {
      const newNotesArray = [];

      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newNotesArray.unshift({ ...oldNote, body: text });
        } else {
          newNotesArray.push(oldNote);
        }
      }

      return newNotesArray;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();

    setNotes((oldNotes) => oldNotes.filter((note) => noteId !== note.id));
  }

  return (
    <div>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            delete={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-4">
          <h2 className="type-preset-lg font-bold">You have no notes</h2>
          <button
            className="bg-blue-base text-white p-4 rounded-lg"
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      )}
    </div>
  );
}
