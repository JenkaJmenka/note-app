import { Note } from "@contracts/Note";
import { useLocalObservable } from "mobx-react";
import React from "react";
import { createNotesStore } from "./NotesStore";

interface NotesSideBarContexState {
    notes: Note[]
    addNote(title: string, content: string): void;
    removeNote(id: string): void;
    updateNote(id: string, title: string, content: string): void;
}

const NotesContext = React.createContext({} as NotesSideBarContexState);

export const NotesProvider = ({children}: React.PropsWithChildren<{}>) => {
    const notesStore = useLocalObservable(createNotesStore)

    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}

export const useNotesStore = () => React.useContext(NotesContext);