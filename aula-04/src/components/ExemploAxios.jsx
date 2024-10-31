import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ExemploAxios() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [clientes, setClientes] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const listaClientes = () => {
    axios
      .get("https://6722c03a2108960b9cc5770a.mockapi.io/clientes")
      .then((response) => {
        setClientes(response.data);
      });
  };

  useEffect(() => {
    listaClientes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      nome: nome,
      email: email,
    };

    axios
      .post("https://6722c03a2108960b9cc5770a.mockapi.io/clientes", newPost)
      .then(() => {
        setEnviado(true);
        listaClientes();
        setNome("");
        setEmail("");
      })
      .catch(() => console.error("erro na requisicao"));
  };
  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nome">nome</label>
            <input
              id="nome"
              type="text"
              name="nome"
              className="my-3 form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="text"
              name="email"
              className="my-3 form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
      <h2>Clientes Cadastrados</h2>
      <ul className="list-group">
        {clientes.map((c) => (
          <li key={c.id} className="list-group-item">
            <b>nome: </b>
            {c.nome} <b>email:</b>
            {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
