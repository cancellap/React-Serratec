import React, { useState } from "react";

export default function FormState() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  function cadastrar(e) {
    e.preventDefault();
    console.log(`Dados funcionario: ${nome} -> ${email}`);
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={cadastrar}>
        <label>Nome: </label>
        <input
          type="text"
          placeholder="Preencha o nome"
          name="nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label>E-mail: </label>
        <input
          type="text"
          placeholder="Preencha o e-mail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
        <hr />
        <input
          type="text"
          placeholder="Digite algo"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <p>"{texto}"</p>
      </form>
    </div>
  );
}
