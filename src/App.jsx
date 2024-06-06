import { useState } from "react";
import "./App.css";
import usuarios from "./usuario.jsx";

function App() {
  const [nombre, setNombre] = useState("");
  let user = document.getElementById("user");
  let pass = document.getElementById("pass");

  const Valida = (e) => {
    console.log(usuarios[0].usuario);
    if (user.value == usuarios[0].usuario && pass.value == usuarios[0].pass) alert("BUEEEEENA");
    else alert("usuario o contraseña no válidos");
  };

  const averquecambio = (e) => {
    setNombre(": " + e.target.value);
    if (e.target.value == "") setNombre();
  };

  return (
    <>
      <h1 id="hache1" class="josefin-sans">
        ¡Hola{nombre}!{" "}
      </h1>
      <div class="cajas">
        <h2 class="josefin-sans">usuario: </h2>
        <input id="user" class="input-box" type="text" onChange={averquecambio} />
      </div>
      <div class="cajas">
        <h2 class="josefin-sans">contraseña:</h2>
        <input id="pass" class="input-box" type="password"></input>
      </div>
      <br /> <br />
      <button onClick={Valida} name="Entre">
        Entrar
      </button>
      <br /> <br />
      <p class="josefin-sans pista ">pista literal: "usuario: pepeloco" pass: "abracadabra"</p>
    </>
  );
}

export default App;
