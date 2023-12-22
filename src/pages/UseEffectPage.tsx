import { useEffect, useState } from "react";

export function UseEffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
    console.log("renderizou");
  }, [count]);

  return (
    <>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Clique aqui
      </button>
    </>
  );
}
