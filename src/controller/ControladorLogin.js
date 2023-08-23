import User from "../model/User.js"
import LoginConsultas from "../model/LoginConsultas.js"

const loginForm = document.getElementById("login-form")
const txtUser = document.getElementById("txtUser")
const txtPass = document.getElementById("txtPass")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  LoginConsultas.verificarUsuario(new User( txtUser.value,txtPass.value))
})


