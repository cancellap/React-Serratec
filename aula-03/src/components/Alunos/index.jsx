import React, { useContext } from "react";
import Nome from "../Nome";
import { UserContext } from "../../contexts/user";

export default function Alunos() {
  const { nome, totalAluno } = useContext(UserContext);
  return (
    <div>
      <h1>Componente Alunos - {nome} - total de alunos: {totalAluno}</h1>
      <Nome />
    </div>
  );
}
