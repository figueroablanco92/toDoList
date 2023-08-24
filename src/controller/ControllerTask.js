import TasksQueries from "../model/TasksQueries.js";
import Task from "../model/Task.js"

const formTask = document.getElementById("form-task")
const mainTitle = document.getElementById("mainTitle")
const listTask = document.getElementById("list-task")
let currentUser = document.getElementById("currentUser")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()




document.addEventListener("DOMContentLoaded", async () =>{
    let tasks = await TasksQueries.getAllTasks()

    currentUser.textContent= `Bienvenido ${localStorage.getItem("user")}` 
    showTasks(tasks)
})

document.addEventListener("click", e =>{
    if( e.target.matches(".fa-pen-to-square")){
       
        formTask.idd.value = e.target.dataset.id
        formTask.title.value = e.target.dataset.title
        formTask.description.value = e.target.dataset.description
        mainTitle.textContent = `Editar ${e.target.dataset.title}`
    }
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