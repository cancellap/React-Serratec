import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";

export default function Nome() {
  const { nome , setNomeAluno} = useContext(UserContext);
  return (
    <div>
      <h1>Bem vindo: {nome}</h1>
      <button onClick={()=> setNomeAluno("Laila")}>Trocar nome</button>
    </div>
  );
}
