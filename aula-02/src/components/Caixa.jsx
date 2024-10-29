import React from "react";

export default function Caixa(props) {
  const caixa = {
    width: "100px",
    height: "100px",
    backgroundColor: props.color,
  };
  return (
    <div>
      <h1>Curso de react</h1>
      <div>
        <p style={caixa}>do serratec</p>
      </div>
    </div>
  );
}
