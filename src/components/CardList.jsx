/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { notesContext } from "./Fields";
import { useContext } from "react";
import Card from "./Card";

export default function CardList() {
  const { noteList, setNoteList } = useContext(notesContext);

  return (
    <>
      <div className="cardList">
        {noteList.map((note) => (
          <Card key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
