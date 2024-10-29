import PropTypes from "prop-types";
import React from "react";

export default function Carro({ modelo, ano, dataLancamento }) {
  Carro.prototype = {
    modelo: PropTypes.string.isRequired,
    ano: PropTypes.number,
    dataLancamento: PropTypes.instanceOf(Date),
  };
  Carro.defaultProps = {
    modelo: "modelo obrigatorio",
    ano: 0,
    dataLancamento: new Date().toLocaleDateString(),
  };
  return (
    <div>
      <li>
        {modelo} - {ano} - {dataLancamento}
      </li>
    </div>
  );
}
