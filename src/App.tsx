import { SideBar } from "@blocks/SideBar";
import { Note } from "@contracts/Note";
import { Main } from "@blocks/Main";
import "./App.css";

const note:Note = { 
  content: "",
  id: "",
  title: ""
}

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;