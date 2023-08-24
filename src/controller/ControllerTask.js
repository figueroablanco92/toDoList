import TasksQueries from "../model/TasksQueries.js";
import Task from "../model/Task.js"

const listTask = document.getElementById("list-task")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()
let currentUser = document.getElementById("currentUser")



document.addEventListener("DOMContentLoaded", async () =>{
    let tasks = await TasksQueries.getAllTasks()

    currentUser.textContent= `Bienvenido ${localStorage.getItem("user")}` 
    showTasks(tasks)
})

const showTasks = tasks => {
   
    tasks.forEach(task => {
        template.querySelector(".title-task").textContent = task.title
        template.querySelector(".description-task").textContent = task.description
        template.querySelector(".fa-pen-to-square").dataset.id = task.id
        template.querySelector(".fa-pen-to-square").dataset.title = task.title
        template.querySelector(".fa-pen-to-square").dataset.description = task.description
        template.querySelector(".fa-circle-minus").dataset.id = task.id

        let clone = document.importNode(template, true)

        fragment.appendChild(clone)

    });

    listTask.appendChild(fragment)
}