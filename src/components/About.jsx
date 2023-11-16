import { useEffect } from "react";
import useCounter from "./CustomHookTest";

export default function About() {
  const [counter, increaseCounter, decreaseCounter] = useCounter(10)

  return (
    <>
      <h3>About {counter}</h3>
      <p className="date">This is a test notes app by Ksusha</p>
      <button onClick={decreaseCounter}> Push me </button>
    </>
  );
}
