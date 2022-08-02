import React from "react";
import store from "@store/NotesStore"

type NotePreviewProps = {
  id: string,
  title: string;
  content: string;
}

export const NotePreview: React.FC<NotePreviewProps> = ({...note}) => {
  return (
    <div
    // className={`app-sidebar-note ${id === activeNote && "active"}`}
    className={`app-sidebar-note`}
    onClick={() => store.setActiveNote(note.id)}
    >
        <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button onClick={() => store.removeNote(note.id)}>Delete</button>
        </div>
        <p>{note.content && note.content.substr(0, 100) + "..."}</p>
    </div>
  )
}