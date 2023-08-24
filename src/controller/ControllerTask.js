import TasksQueries from "../model/TasksQueries.js";
import Task from "../model/Task.js"
import Error from "../utils/Error.js"

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
       
        formTask.id.value = e.target.dataset.id
        formTask.title.value = e.target.dataset.title
        formTask.description.value = e.target.dataset.description
        mainTitle.textContent = `Editar ${e.target.dataset.title}`

    }else if(e.target.matches(".fa-circle-minus")){

        checkErasedTask( e.target.dataset.id )

    }else if(e.target.matches(".fa-circle-check")){
        
        changeStateTask( e.target.dataset.id, true )

    }else if(e.target.matches(".fa-undo-alt")){
        changeStateTask( e.target.dataset.id, false )
    }
})

document.addEventListener("submit", e =>{
    e.preventDefault()

    let titleTask = e.target.title.value
    let descriptionTask = e.target.description.value

    if( e.target == formTask ){
        
        if( titleTask  && descriptionTask ){
            
            if(!e.target.id.value){
                addTask(e.target)
    
            }else{
                editTask(e.target)
            }
        }else{
            formTask.insertAdjacentHTML("beforebegin", Error.showError("El titulo y/o contraseña estan vacíos."))
        }
       
    }
})



const showTasks = tasks => {
   
    tasks.forEach(task => {
        let clone = document.importNode(template, true)
        clone.querySelector(".title-task").textContent = task.title
        clone.querySelector(".description-task").textContent = task.description
        clone.querySelectorAll(".fa-solid")[0].dataset.id = task.id
        clone.querySelectorAll(".fa-solid")[1].dataset.id = task.id
        clone.querySelectorAll(".fa-solid")[1].dataset.title = task.title
        clone.querySelectorAll(".fa-solid")[1].dataset.description = task.description
        clone.querySelectorAll(".fa-solid")[2].dataset.id = task.id

        if( task.completed ){
            clone.querySelector(".alert").classList.replace("alert-warning","alert-primary")
            clone.querySelectorAll(".fa-solid")[0].classList.replace("fa-circle-check","fa-undo-alt")
            clone.querySelector(".title-task").style.textDecoration = "line-through"
            clone.querySelectorAll(".fa-solid")[1].style.display = "none"
           
        }

        fragment.appendChild(clone)

    });

    listTask.appendChild(fragment)
}

const editTask = form =>{
    
    const task = new Task( form.title.value, form.description.value)
    TasksQueries.editTask(form.id.value, task)
}

const addTask = form =>{
    const task = new Task( form.title.value, form.description.value)
    TasksQueries.addTask(task)
}

const deleteTask = id =>{
    TasksQueries.deleteTask( id )
}

const changeStateTask = async (id, state) => {

    const task = await TasksQueries.getTask( id )
    task.completed = state
    TasksQueries.changeStateTask( task )
}

const checkErasedTask = ( id )=>{
    Swal.fire({
        title: '¿Estas seguro de eliminar esta tarea?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            deleteTask( id )
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}