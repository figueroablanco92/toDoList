import Conexion from "../utils/Conexion.js";


export default class TasksQueries{

    static async getAllTasks(){
        const url = "http://localhost:3000/tasks"
        const options = {
            method:"GET"
        }

        let tasks = await Conexion.obtenerConexion(url, options)
        

        return tasks
    }

    static async EditTask( id, task ){
        const url = `http://localhost:3000/tasks/${id}`
        const options = {
            method:"PUT",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            },
            body:JSON.stringify({
                ...task,
                title: task.title,
                description: task.description
            })
        }

        let tasks = await Conexion.obtenerConexion(url, options)
    }

}