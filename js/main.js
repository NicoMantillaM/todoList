import { getAllTask, addTask } from "./module/api.js";
import { task } from "./components/list.js";


document.addEventListener('DOMContentLoaded', async() => {

    const updateDateTime = () => {
        document.querySelector('#date').textContent = new Date().toLocaleString();
    };
    updateDateTime();
    setInterval(updateDateTime, 1000);


    let info = await getAllTask();

    let loadTasks = async() => {
        //crear un nuevo array con los elementos que cumplan la condicion
        let taskOnHold = info.filter(task=> task.status === 'On hold');   
        let taskready = info.filter(task=> task.status === 'ready');
    
        section__onhold.innerHTML = await task(taskOnHold, 'On hold');
        section__ready.innerHTML = await task(taskready, 'ready');
    };

    await loadTasks();

    let createTask = document.querySelector('#createTask');
    createTask.addEventListener("click", async()=>{
        let taskName = document.querySelector('#taskName');
        let newTask = {
            task: taskName.value,
            status: 'On hold'
        };
        await addTask(newTask);
        taskName.value = '';
        await loadTasks();
    });
});

