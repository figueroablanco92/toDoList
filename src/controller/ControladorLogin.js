import User from "../model/User.js"
import LoginConsultas from "../model/LoginConsultas.js"
import Error from "../utils/Error.js"

const loginForm = document.getElementById("login-form")
const txtUser = document.getElementById("txtUser")
const txtPass = document.getElementById("txtPass")

loginForm.addEventListener("submit", async e => {
  e.preventDefault();
  let errorMessage = await LoginConsultas.verificarUsuario(new User( txtUser.value,txtPass.value))

  if(errorMessage){
    loginForm.insertAdjacentHTML("beforebegin", Error.showError(errorMessage))
  }
})


