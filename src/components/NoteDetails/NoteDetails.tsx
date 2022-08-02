import React from "react";
import ReactMarkdown from "react-markdown";
import store from "@store/NotesStore";

type NoteDetailsProps = {
  id: string;
  title: string;
  content: string;
}


export const NoteDetails: React.FC<NoteDetailsProps> = ({ ...note }) => {
  return (
    <div className="app-main-note-preview">
        <h1 className="preview-title">{note.title}</h1>
        <ReactMarkdown className="markdown-preview">
            {note.content}
        </ReactMarkdown>
    </div>
  )
}