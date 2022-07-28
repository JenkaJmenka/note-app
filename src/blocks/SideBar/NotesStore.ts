import { Note } from "@contracts/Note";
import { nanoid } from "nanoid"

export function createNotesStore() {
    return {
        notes: [] as Note[],
        addNote(title: string, content: string) {
            this.notes.push({
                id: nanoid(),
                title: title,
                content: content
            });
        },
        removeNote(id: string) {
            this.notes = this.notes.filter(note => note.id !== id);
        },
        updateNote(id: string, title: string, content: string) {
            this.notes.find(note => {
                if (note.id === id) {
                    note.title = title;
                    note.content = content;
                }
            })
        }
    }
}