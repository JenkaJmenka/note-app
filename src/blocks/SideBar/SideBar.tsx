import { NotePreview } from "@components/NotePreview";
import { Note } from "@contracts/Note";
import React from "react";

type SideBarProps = {
  notes: Note[];
}

export const SideBar: React.FC<SideBarProps> = (props) => {
    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={() => console.log("Add note")}>Add</button>
        </div>
        <div className="app-sidebar-notes">
        {props.notes.map((note) => (
            <NotePreview id={note.id} title={note.title} content={note.content} />
        ))}
        </div>
    </div>
  );
}