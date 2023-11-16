import { useEffect, useState } from "react";

export default function useCounter(defaultVal) {
    const [counter, setCounter] = useState(defaultVal);
    function increaseCounter(){
        setCounter((prev) => prev+1)
    }
    function decreaseCounter(){
        setCounter((prev) => prev-1)
    }

    return [counter, increaseCounter, decreaseCounter]
}