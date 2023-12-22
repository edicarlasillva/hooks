import { useState, useEffect } from "react";

interface Repository {
  id: number;
  name: string;
}

export function UseEffectApi() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function fetchRepositores() {
      const response = await fetch(
        "https://api.github.com/users/edicarlasillva/repos"
      );

      const data = await response.json();

      setRepositories(data);
    }

    fetchRepositores();
  }, []);

  return (
    <>
      {repositories.map((repository) => (
        <p key={repository.id}>{repository.name}</p>
      ))}
    </>
  );
}
