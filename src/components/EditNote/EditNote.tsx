import React from "react";

type EditNoteProps = {
  id: string;
  title: string;
  content: string;
}

export const EditNote: React.FC<EditNoteProps> = ({ id, title, content }) => {
  return (
 <div className="app-main-note-edit">
        <input
          type="text"
          id={id}
          placeholder="Note Title"
          value={title}
          //onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={content}
          //onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
  )
}