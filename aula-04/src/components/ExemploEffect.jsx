import React, { useEffect, useState } from "react";

export default function ExemploEffect() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("");
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    console.log("executou useEffect");
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setHora(new Date());
    }, 1000);
  });

  return (
    <div>
      <h1>useEffect</h1>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Clique</button>
      <h1>{nome}</h1>
      <h1>{hora.toLocaleTimeString()}</h1>
    </div>
  );
}
