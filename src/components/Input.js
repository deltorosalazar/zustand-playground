import { useRef } from "react";
import { usePeopleStore } from "../store";

const Input = () => {
  const inputRef = useRef();
  const addPerson = usePeopleStore((state) => state.addPerson);

  const handleAddPerson = () => {
    const name = inputRef.current.value;

    if (!name) return;

    addPerson(name);

    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
};

export default Input;
