const d = document;

import "./sass/main.scss";
import validarFormulario from "./validacion_formulario";

//console.log(document.querySelector("title").textContent);

d.addEventListener("DOMContentLoaded", () => {
  validarFormulario();
});
