import { getAllTask, addTask, deleteTask, checkTask } from "./module/api.js";
import { task } from "./components/list.js";


document.addEventListener('DOMContentLoaded', async() => {

    const updateDateTime = () => {
        document.querySelector('#date').textContent = new Date().toLocaleString();
    };
    updateDateTime()
    setInterval(updateDateTime, 1000);


    let info = await getAllTask();
    
    let loadTasks = async() => {

        info = await getAllTask();
        //crear un nuevo array con los elementos que cumplan la condicion
        let taskOnHold = info.filter(task=> task.status === 'On hold');   
        let taskready = info.filter(task=> task.status === 'ready');
    
        section__onhold.innerHTML = await task(taskOnHold, 'On hold');
        section__ready.innerHTML = await task(taskready, 'ready');
       
        document.querySelectorAll('.trash').forEach(button => {
            button.addEventListener("click", async (e) => {
                let id = e.target.dataset.id;
                e.target.closest('.task_hold, .task_ready').remove(); 
                await deleteTask(id);

                info.forEach(async element => {
                    if(element.id == id){
                        info(element);
                    }
                })
            });
        });

        
        document.querySelectorAll('.check').forEach(button => {
            button.addEventListener("click", async (e) => {
                let id = e.target.dataset.id
                let task = info.find(task => task.id == id);
                let newStatus = task.status === 'On hold' ? 'ready' : 'ready';
                let updatedTask = { ...task, status: newStatus };
                
                await checkTask(id, updatedTask);
                await loadTasks();
            });
        });
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
        info.push(newTask);
        await loadTasks();
    });

    let createTaskInput = document.querySelector('#taskName');
    createTaskInput.addEventListener("change", async()=>{
        let taskName = document.querySelector('#taskName');
        let newTask = {
            task: taskName.value,
            status: 'On hold'
        };
        await addTask(newTask);
        taskName.value = '';
        info.push(newTask);
        await loadTasks();
    });

});

