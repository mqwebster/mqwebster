"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

import "./App.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  // const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
        <Split sizes={[30, 70]} direction={"horizontal"} className="split">
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
        <div className="relative z-0 w-full h-[72vh] flex flex-col justify-center items-center gap-4">
          <h2 className="heading-5 md:heading-6 font-title">
            You have no notes
          </h2>

          <button
            className={
              "rounded-lg border border-black bg-transparent text-white dark:border-white relative group transition duration-200"
            }
            onClick={createNewNote}
          >
            <div className="px-10 py-3">
              <div className="rounded-lg absolute -bottom-2 right-2 bg-blue-base group-hover:bg-blue-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative">Create a new note</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
