import { useNotesStore } from "@blocks/SideBar/NotesContext";
import { Note } from "@contracts/Note";
import { useObserver } from "mobx-react";
import React from "react";

type EditNoteProps = {
  id: string;
  title: string;
  content: string;
}

export const EditNote: React.FC<EditNoteProps> = ({ id, title, content }) => {
  const [noteTitle, setNoteTitle] = React.useState(title);
  const [noteContent, setNoteContent] = React.useState(content);
  const notesStore = useNotesStore();
  
  return useObserver(() => 
    <div className="app-main-note-edit">    
      <button 
        onClick={() => notesStore.addNote(noteTitle, noteContent)}>
        Save
      </button> 
      <input
        type="text"
        id={id}
        placeholder="Note Title"
        defaultValue={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        autoFocus
      />
      <textarea
        id="body"
        placeholder="Write your note here..."
        defaultValue={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
    </div>
  )
}