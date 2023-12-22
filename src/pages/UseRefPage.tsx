import { useRef } from "react";

export function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();

      console.log(inputRef.current.value);
    }
  }

  return (
    <>
      <input type="text" ref={inputRef} name="teste" />
      <button onClick={focusInput}>Focus</button>

      {console.log(inputRef.current?.name)}
    </>
  );
}
