import { NotePreview } from "@components/NotePreview";
import { Note } from "@contracts/Note";
import store  from "@store/NotesStore";
import { observer } from "mobx-react";
import React from "react";

type SideBarProps = {
  notes: Note[];
}

export const SideBar: React.FC<SideBarProps> = observer(() => {
    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={() => {store.addNote()}}>Add</button>
        </div>
        <div className="app-sidebar-notes">
        {store.notes.map((note: {id: string, title: string, content: string}) => (
            <NotePreview  id={note.id} title={note.title} content={note.content} />
        ))}
        </div>
    </div>
  );
})