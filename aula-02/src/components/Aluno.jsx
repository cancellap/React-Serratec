import React from "react";

export default function Aluno({ nome, idade, profissao }) {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
}
