import { Note } from "@contracts/Note";
import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid"

const addNote = (notes: Note[], note: Note): Note[] => [ ...notes,
    {
        id: nanoid(5),
        title: note.title,
        content: note.content,
        isActive: true
    }
]

class Store {
    notes: Note[] = [];
    newNote: Note = {
        content:"",
        id: "",
        title: "",
        isActive: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    addNote = () => {
        this.notes = addNote(this.notes, this.newNote)
    }

    removeNote = (id: string) => {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    updateNote = (id: string, title: string, content: string) => {
        this.notes.find(note => {
            if (note.id === id) {
                note.title = title;
                note.content = content;
            }
        });
    }
    setActiveNote = (id: string) => {
        this.newNote = this.notes.find(note => note.id === id) || {
            id: "",
            content: "",
            isActive: false,
            title: ""
        };
    }
}

const store = new Store();
export default store;