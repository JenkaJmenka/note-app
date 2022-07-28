// components/Button.tsx
import { EditNote } from "@components/EditNote";
import { Note } from "@contracts/Note";
import React from "react";

type MainProps = {
  note: Note;
}

export const Main: React.FC<MainProps> = ({ note }) => {
  return (
    <EditNote {...note}/>
    )
}