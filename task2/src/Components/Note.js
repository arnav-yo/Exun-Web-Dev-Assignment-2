import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = (props) => {
  return (
    <div className="note">
      <h4 className="note-title">{props.note.title}</h4>
      <p className="note-description">{props.note.desc}</p>
      <button
        className="delete-note"
        onClick={() => props.deleteNote(props.note)}
      >
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        Delete Note
      </button>
    </div>
  );
};

export default Note;
