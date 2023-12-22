import { useState, useRef } from "react";

export function UseRefMutableValue() {
  const [stateValue, setStateValue] = useState(0);
  const mutableValue = useRef(0);

  function incrementStateValue() {
    setStateValue((prevState) => prevState + 1);
    console.log(stateValue);
  }

  function incrementMutableValue() {
    mutableValue.current += 1;
    console.log(mutableValue);
  }

  return (
    <>
      {console.log("renderizou")}
      <button onClick={incrementStateValue}>State</button>
      <button onClick={incrementMutableValue}>Mutable</button>
    </>
  );
}
