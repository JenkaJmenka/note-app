import { SideBar } from "@blocks/SideBar";
import { Note } from "@contracts/Note";
import { Main } from "@blocks/Main";
import "./App.css";

const note: Note = { 
  content: "",
  id: "",
  title: "",
  isActive: false
}

function App() {
  return (
    <div className="App">
        <SideBar
          notes={[]}
        />
      <Main 
        note={note}
      />
    </div>
  );
}

export default App;