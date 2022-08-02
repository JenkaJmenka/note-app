import { observer } from "mobx-react";
import React from "react";
import store from "@store/NotesStore"

type EditNoteProps = {
  id: string;
  title: string;
  content: string;
}

export const EditNote: React.FC<EditNoteProps> = observer(({...note}) => {
  return (
    <div className="app-main-note-edit">    
      <button 
        onClick={() => store.addNote()}>
        Save
      </button> 
      <input
        type="text"
        placeholder="Note Title"
        value={store.newNote.title}
        onChange={(e) => store.newNote.title = e.target.value}
        autoFocus
      />
      <textarea
        id="body"
        placeholder="Write your note here..."
        value={store.newNote.content}
        onChange={(e) => store.newNote.content = e.target.value}
      />
    </div>
  )
});