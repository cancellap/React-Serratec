import React, { useState } from "react";

export default function State() {
  const [valor, setValor] = useState(100);

  const [texto, setTexto] = useState("Pedro");

  return (
    <div>
      <h1>Uso do useState</h1>
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(valor * 2)}>Cacular</button>
      <p>{texto}</p>
      <button onClick={() => setTexto("Pedro Cancella")}> Alterar nome</button>
    </div>
  );
}
