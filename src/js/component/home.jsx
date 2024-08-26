import React from "react";
import Contador from "./contador.js";
import Boton from "./boton.js";
import Digito from "./digito.js";
import "../../styles/index.css";

//create your first component

function Home() {
  return (
    <div className="text-center">
      <Contador />
    
    </div>
  );
}
export default Home;
