/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import "./Fields.css";
import CardList from "./CardList.jsx";
import Inputs from "./Inputs";

export const notesContext = createContext(null);

export default function Fields() {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNoteList(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  return (
    <notesContext.Provider value={{ noteList, setNoteList }}>
      <Inputs />

      <div className="cardList">
        <CardList></CardList>
      </div>
    </notesContext.Provider>
  );
}
