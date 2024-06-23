export const task = async(info) => {
    let plantilla = "";
    
    info.forEach(element => {
        
        plantilla += /*html*/`
        <div class="task_hold">
            <p>${element.task}</p>
            <div class="imagenes">
                <img src="storage/img/check.png" alt="checkimg">
                <img src="storage/img/trash.png" alt="trashimg">
            </div>
        </div>
        `;
    });
    return plantilla;
}