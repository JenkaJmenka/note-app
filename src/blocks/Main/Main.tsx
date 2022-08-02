// components/Button.tsx
import { EditNote } from "@components/EditNote";
import { NoteDetails } from "@components/NoteDetails";
import { Note } from "@contracts/Note";
import React from "react";
import { observer } from "mobx-react";
import store from "@store/NotesStore";

type MainProps = {
  note: Note;
}

export const Main: React.FC<MainProps> = observer(() => {
  return (
    <div>
      <EditNote {...store.newNote}/>
      <NoteDetails {...store.newNote} />
    </div>
    )
})