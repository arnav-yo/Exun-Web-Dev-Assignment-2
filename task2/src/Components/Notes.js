import React from "react";
import "../Notes.css";
import { Link } from "react-router-dom";
import Note from "./Note";

const YourNotes = (props) => {
  return (
    <div className="notes-page-wrapper">
      <h3>Your Notes</h3>
      <div className="note-wrapper">
        {props.notes.length === 0 ? (
          <span>No notes to display</span>
        ) : (
          props.notes.map((note) => {
            return (
              <Note deleteNote={props.deleteNote} key={note.sno} note={note} />
            );
          })
        )}
      </div>
      <Link to="/add-note">
        <button className="add-note-btn btn-effect">Add A Note</button>
      </Link>
    </div>
  );
};

export default YourNotes;
