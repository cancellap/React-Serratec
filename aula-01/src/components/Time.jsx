import React from "react";
import Logo from "../assets/react.svg";

export default function Time() {
  const times = ["Vasco", "Fluminense", "Botafogo"];
  const pessoa = {
    nome: "bartolomeu",
    idade: 2,
  };

  const dadosPessoa = (pessoa) => {
    return `${pessoa.nome} , sua idade é: ${pessoa.idade}`;
  };
  const listTimes = times.map((time, index) => <li key={index}>{time}</li>);

  const soma = (a, b) => a + b;

  const texto = (msg) => msg.toUpperCase();
  //retorno geral do componente
  return (
    <div>
      <h1>Lista de times</h1>
      <p>Ola, {dadosPessoa(pessoa)}</p>
      <p>{soma(1, 3)}</p>
      <img src={Logo} alt="" />
      <ul>{listTimes}</ul>
      <p>{texto("esse texto ficara grandao")}</p>
    </div>
  );
}
