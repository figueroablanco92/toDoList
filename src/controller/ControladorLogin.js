import User from "../model/User.js";
import LoginConsultas from "../model/LoginConsultas.js";

const loginForm = document.getElementById("login-form");
const txtUser = document.getElementById("txtUser");
const txtPass = document.getElementById("txtPass");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = txtUser.value;
  let pass = txtPass.value;

  LoginConsultas.verificarUsuario(new User( name, pass));
});

// const user = new User("alex","123")
// LoginConsultas.verificarUsuario(user)
