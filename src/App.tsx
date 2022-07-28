import { SideBar } from "@blocks/SideBar";
import { Note } from "@contracts/Note";
import { Main } from "@blocks/Main";
import "./App.css";
import { NotesProvider } from "@blocks/SideBar/NotesContext";

const note:Note = { 
  content: "",
  id: "",
  title: ""
}

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <SideBar
          notes={[]}
          // onAddNote={onAddNote}
          // onDeleteNote={onDeleteNote}
          // activeNote={activeNote}
          // setActiveNote={setActiveNote}
        />
      <Main 
        note={note} 
        // onUpdateNote={onUpdateNote} 
      />      
      </NotesProvider>
    </div>
  );
}

export default App;