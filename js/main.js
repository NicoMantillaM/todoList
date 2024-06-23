import { getAllTask } from "./module/api.js";
import { task } from "./components/list.js";


document.addEventListener('DOMContentLoaded', async() => {
    
    const updateDateTime = () => {
        document.querySelector('#date').textContent = new Date().toLocaleString();
    };
    updateDateTime();
    setInterval(updateDateTime, 1000);


    let info = await getAllTask();
    section_task1.innerHTML = await task(info);

});

