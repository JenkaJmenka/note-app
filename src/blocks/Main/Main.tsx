// components/Button.tsx
import { Note } from "@contracts/Note";
import React from "react";
import ReactMarkdown from "react-markdown";

type MainProps = {
  note: Note;
}

export const Main: React.FC<MainProps> = ({ note }) => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={note.title}
          // onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={note.content}
          //onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{note.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {note.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}