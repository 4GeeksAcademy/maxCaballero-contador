import React from "react";
/*import Contador from "./contador.js";
import Boton from "./boton.js";
import Digito from "./digito.js";*/
import Reloj from "./reloj.js";
import Dig from "./dig.js";
import Bot from "./bot.js";

import "../../styles/index.css";


//create your first component

function Home() {
  return (
    <div className="text-center">
      <Reloj />
      <Dig />
      <Bot />
    </div>
  );
}
export default Home;
