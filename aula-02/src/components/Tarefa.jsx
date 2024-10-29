import React from "react";

export default function Tarefa({ titulo, descricao, estado }) {
  return (
    <div>
      <p>{titulo}</p>
      <p>{descricao}</p>
      <p>Status: {estado ? "Concluido" : "Pendente"}</p>
    </div>
  );
}
