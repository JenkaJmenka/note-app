import React from "react";
import ReactMarkdown from "react-markdown";

type NoteDetailsProps = {
  id: string;
  title: string;
  content: string;
}

export const NoteDetails: React.FC<NoteDetailsProps> = ({ title, content }) => {
  return (
    <div className="app-main-note-preview">
        <h1 className="preview-title">{title}</h1>
        <ReactMarkdown className="markdown-preview">
            {content}
        </ReactMarkdown>
    </div>
  )
}