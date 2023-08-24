import Conexion from "../utils/Conexion.js"


export default class LoginConsultas{

    static async verificarUsuario( usuario ){
        let messageError = ""

        const url = "http://localhost:3000/users"
        const parameters = {
            method:"GET"
        }

        if( usuario){
            if( usuario.name && usuario.pass){
                const usuarios =  await Conexion.obtenerConexion(url, parameters)
                
                const valor = usuarios.filter( user =>{
                    if( usuario.name == user.name && usuario.pass == user.pass){
                        window.localStorage.setItem("user",user.name)
                        window.location.href='src/view/todolist.html'
                    }else{
                       
                        messageError = "Error la contraseña y/o usuario son incorrectos"
                    }
                })
            }else{
                messageError = "el campo usuario y/o contraseña estan vacios"
            }
        }else{
            console.log("No se ha introducido ningun usuario")
        }

        return messageError
    }

}