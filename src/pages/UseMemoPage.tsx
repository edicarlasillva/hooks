import { useMemo } from "react";

interface ExampleComponentProps {
  list: number[];
}

function ExampleComponent({ list }: ExampleComponentProps) {
  const total = useMemo(() => {
    return list.reduce((acc, item) => acc + item);
  }, [list]);

  console.log(total);

  return <p>Total: {total}</p>;
}

export function UseMemoPage() {
  const myList: number[] = [1, 2, 3, 4, 5, 6];

  return <ExampleComponent list={myList} />;
}
