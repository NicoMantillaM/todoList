export const task = async(info, status) => {
    let plantilla = "";
    
    info.forEach(element => {
        if (status === 'On hold'){
            plantilla += /*html*/`
            <div class="task_hold">
                <p>${element.task}</p>
                <div class="imagenes">
                    <img class="check" data-id="${element.id}" src="storage/img/check.png" alt="checkimg">
                    <img class="trash" data-id="${element.id}" src="storage/img/trash.png" alt="trashimg">
                </div>
            </div>
            `;
        }else if (status === 'ready'){
            plantilla += /*html*/`
            <div class="task_ready">
                <del>${element.task}</del>
                <div class="imagenes">
                    <img class="check" data-id="${element.id}" src="storage/img/check.png" alt="checkimg">
                    <img class="trash" data-id="${element.id}" src="storage/img/trash.png" alt="trashimg">
                </div>
            </div>
            `;
        }
    });
    return plantilla;
}