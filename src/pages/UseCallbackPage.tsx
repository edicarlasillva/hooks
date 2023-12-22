import { useCallback, useState } from "react";

interface ChildComponentProps {
  onClick: () => void;
}

function ChildComponent({ onClick }: ChildComponentProps) {
  return <button onClick={onClick}>Click aqui</button>;
}

export function UseCallbackPage() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log(handleClick);

  return (
    <>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </>
  );
}
