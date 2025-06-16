import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import { useState } from "react";
import AddNote from "./Components/AddNote";

function App() {
  const addNote = (note) => {
    setNotes([
      ...notes,
      { title: note.title, desc: note.desc, sno: notes[notes.length - 1] + 1 },
    ]);
  };
  const deleteNote = (note) => {
    if (notes.length === 1) {
      setNotes([]);
    } else {
      setNotes(
        notes.filter((el) => {
          return el.sno !== note.sno;
        })
      );
    }
  };
  const [notes, setNotes] = useState([]);
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/make-notes"
            element={<Notes deleteNote={deleteNote} notes={notes} />}
          />
          <Route
            exact
            path="/add-note"
            element={<AddNote addNote={addNote} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
