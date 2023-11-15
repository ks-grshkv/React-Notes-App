/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { notesContext } from "./Fields";

export default function Inputs(props) {
  const { noteList, setNoteList } = useContext(notesContext)

  const [titleValue, setTitleValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(props.id ?? 0);

  useEffect(() => {
    if (noteList.length > 0) {
      localStorage.setItem('notes', JSON.stringify(noteList));
    }

  }, [noteList,])

  function editNote(inputValue, titleValue, date_now, id) {
    let cur_date =
      date_now.getDay() +
      "/" +
      date_now.getMonth() +
      "/" +
      date_now.getFullYear();
    console.log(props)
    setId(props.id ?? 0)
    console.log(props.id)
    let note = noteList.find((note) => note.id == props.id)
    console.log(note)
    if (!note) {
      console.log('adding note')
      addNote(inputValue, titleValue, date_now, id)
    } else {
      console.log('editing note')
      note.title = titleValue
      note.text = inputValue
      note.updated = cur_date
    }

  }

  function addNote(inputValue, titleValue, date_now, id) {
    setId(id);
    let cur_date =
      date_now.getDay() +
      "/" +
      date_now.getMonth() +
      "/" +
      date_now.getFullYear();
    setDate(cur_date);
    let item = {
      title: titleValue,
      text: inputValue,
      date: cur_date,
      updated: cur_date,
      id: id,
    };
    let newt = [...noteList];
    newt.push(item);
    setNoteList(newt);
    setInputValue("");
    setTitleValue("");
  }


  return <div className="div-2">

    <input
      className="input-body input-title"
      type="textarea"
      value={titleValue}
      onChange={(event) => {
        setTitleValue(event.target.value);
      }}
    ></input>
    <input
      className="input-body"
      type="textarea"
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
    ></input>
    <button
      className="button-main"
      onClick={() => {
        editNote(inputValue, titleValue, new Date(), new Date().toString());
      }}
    >
      Save Note
    </button>
  </div>
}