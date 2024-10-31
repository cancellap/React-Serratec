import React from "react";

export default function CondicionalLista() {
  const produtos = ["tv", "celular", "monitor"];
  return (
    <div>
      {produtos.length > 0 ? (
        produtos.map((p, i) => <p key={i}>{p}</p>)
      ) : (
        <p>Nao existem produtos</p>
      )}
    </div>
  );
}
