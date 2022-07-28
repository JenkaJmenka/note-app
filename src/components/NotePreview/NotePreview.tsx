import React from "react";

type NotePreviewProps = {
  id: string;
  title: string;
  content: string;
}

export const NotePreview: React.FC<NotePreviewProps> = ({ id, title, content }) => {
  return (
    <div
    // className={`app-sidebar-note ${id === activeNote && "active"}`}
    className={`app-sidebar-note`}
    // onClick={() => setActiveNote(id)}
    >
        <div className="sidebar-note-title">
            <strong>{title}</strong>
            <button onClick={(e) => console.log('Delete')}>Delete</button>
        </div>
        <p>{content && content.substr(0, 100) + "..."}</p>
    </div>
  )
}