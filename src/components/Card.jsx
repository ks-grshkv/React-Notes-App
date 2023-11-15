/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Card.css";
import Modal from "react-bootstrap/Modal";
import { notesContext } from "./Fields";
import Inputs from "./Inputs";

export default function Card(props) {
  const { noteList, setNoteList } = useContext(notesContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let valProps = valdata(props.note);

  function delete_card(id) {
    setNoteList((prev) => prev.filter((note) => note.id != id));
    localStorage.setItem("notes", JSON.stringify(noteList));
  }

  function valdata(note) {
    if (!note) {
      return {
        title: "",
        text: "",
        date: "",
      };
    }
    if (!note.title) {
      note.title = "";
    }
    if (!note.text) {
      note.text = "";
      alert("Note text is mandatory!");
    }
    if (!note.date) {
      note.date = "";
    }
    if (!note.updated) {
      note.updated = "";
    }
    return {
      title: note.title,
      text: note.text,
      date: note.date,
      updated: note.updated,
    };
  }

  return (
    <>
      <div onClick={handleShow} className="card">
        <div className="card-content">
          <h3>{valProps.title}</h3>
          <p>{valProps.text}</p>
          <p className="date">Created: {valProps.date}</p>
          <p className="date">Last updated: {valProps.updated}</p>
        </div>

        <button
          onClick={() => {
            handleShow;
            if (confirm("Are you sure you want to delete your note?")) {
              delete_card(props.note.id);
            }
          }}
        >
          Delete
        </button>
      </div>

      <Modal
        className="modal-opened"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <div className="card-content">
          <Inputs id={props.note.id}></Inputs>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
