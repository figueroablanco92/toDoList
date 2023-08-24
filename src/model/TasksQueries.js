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

    static async getTask( id ){
        const url = `http://localhost:3000/tasks/${id}`
        const options = {
            method:"GET"
        }

        let tasks = await Conexion.obtenerConexion(url, options)
        

        return tasks
    }

    static async editTask( id, task ){
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

    static async addTask( task ){
        const url = "http://localhost:3000/tasks/"
        const options = {
            method:"POST",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            },
            body:JSON.stringify({
                title: task.title,
                description: task.description,
                completed: task.completed
            })
        }

        let tasks = await Conexion.obtenerConexion(url, options)
    }

    static async deleteTask( id ){
        const url = `http://localhost:3000/tasks/${id}`
        const options = {
            method:"DELETE",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            }
        }

        let tasks = await Conexion.obtenerConexion(url, options)
    }

    static async changeStateTask( task ){
        const url = `http://localhost:3000/tasks/${task.id}`
        const options = {
            method:"PUT",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            },
            body:JSON.stringify({
                ...task,
                completed:task.completed
            })
        }

        let tasks = await Conexion.obtenerConexion(url, options)
    }

}