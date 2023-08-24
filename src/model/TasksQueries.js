import Conexion from "../utils/Conexion.js";


export default class TasksQueries{

    static async getAllTasks(){
        const url = "http://localhost:3000/tasks"
        const parameters = {
            method:"GET"
        }

        let tasks = await Conexion.obtenerConexion(url, parameters)
        

        return tasks
    }

}