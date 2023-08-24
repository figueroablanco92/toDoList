import Conexion from "../utils/Conexion.js"


export default class LoginConsultas{

    static async verificarUsuario( usuario ){

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
                        console.log("Error el password y/o usuario son incorrectos")
                    }
                })
            }else{
                console.log("el nombre y el pass estan vacios")
            }
        }else{
            console.log("No se ha introducido ningun usuario")
        }
    }

}