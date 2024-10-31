import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function () {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/cancellap").then((resposta) =>
      resposta
        .json()
        .then((json) => setUser(json))
        .catch("Problemas na requisicao")
    );
  }, []);

  return (
    <div>
      <h1>Dados do usuario</h1>
      <hr />
      <p>Login: {user.login}</p>
      <a href={user.html_url}> clique aqui</a>
      <img src={user.avatar_url} alt="" />
    </div>
  );
}
