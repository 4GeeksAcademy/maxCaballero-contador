import React from "react";
import Boton from "./boton";
import Digito from "./digito";
import "../../styles/contador.css";

function Contador() {
  return (
    <div className="contenedor-contador">
      <Boton />
      <Digito />
      <Digito />
      <Digito />
      <Digito />
      <Digito />
      <Digito />
    </div>
  );
}
export default Contador;
