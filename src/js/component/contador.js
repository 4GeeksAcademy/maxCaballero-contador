import React, { useState, useEffect } from "react";
import Boton from "./boton.js";
import Digito from "./digito.js";
import "../../styles/contador.css";

function Contador() {
  const [conteo, setConteo] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setConteo(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
