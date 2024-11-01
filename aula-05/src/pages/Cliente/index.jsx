import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, RedButton, StyledButton } from "./Button.style";

export default function Cliente() {
  const { id } = useParams();
  const [active, setActive] = useState(true);
  return (
    <div>
      <h1>Página do Cliente com id:{id}</h1>
      <StyledButton onClick={() => alert("Clique")}>Clique Aqui</StyledButton>
      <RedButton onClick={() => setActive(!active)}>Clique Aqui</RedButton>

      <Card active={active}>
        <h1>Título do Card</h1>
        <p>Descrição do Card</p>
      </Card>
    </div>
  );
}
