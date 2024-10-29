import React from "react";
import Curso from "./components/Curso";
import Botao from "./components/Botao";
import Aluno from "./components/Aluno";
import Tarefa from "./components/Tarefa";
import Carro from "./components/Carro";
import "./index.css";
import Caixa from "./components/Caixa";
import Button from "./components/Button";
import AppClasse from "./components/AppClasse";

export default function App() {
  return (
    <div>
      <Curso nome="React" />
      <Aluno nome="pedro" idade="20" profissao="desempregado" />
      <Tarefa titulo={"estudar"} descricao="estudar react" estado={true} />
      <Carro modelo={"palio"} ano={"2008"} />
      <Caixa color="red" />
      <Button />
      <button className="button">Clique aqui 2</button>
      <AppClasse curso="react"/>
    </div>
  );
}
