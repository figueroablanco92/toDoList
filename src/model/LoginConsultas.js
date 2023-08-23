import Conexion from "../utils/Conexion.js"


export default class LoginConsultas{

    static async verificarUsuario( usuario ){

        const url = "http://localhost:3000/users"

        if( usuario){
            if( usuario.name && usuario.pass){
                const usuarios =  await Conexion.obtenerConexion(url)
                
                const valor = usuarios.filter( user =>{
                    if( usuario.name == user.name && usuario.pass == user.pass){
                        window.localStorage.getItem("user",user)
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