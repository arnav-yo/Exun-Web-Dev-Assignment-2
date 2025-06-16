import React from "react";
import "../addnote.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddNote = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form action="">
      <div className="main-form">
        <h2>Customize your note!</h2>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          placeholder="Type your note's title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="title">Description:</label>
        <br />
        <textarea
          type="text"
          id="title"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Type your note's title here"
        />
        <br />
        <Link
          to="/make-notes"
          onClick={(e) => {
            if (!title || !description) {
              alert("Title and Description must be filled."); // Show alert
              e.preventDefault();
            } else {
              props.addNote({ title: title, desc: description });
            }
          }}
        >
          <button className="btn-effect">Add Note</button>
        </Link>
      </div>
    </form>
  );
};

export default AddNote;
