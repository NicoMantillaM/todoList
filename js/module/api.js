export const getAllTask = async() => {
    const url = ("https://66760010a8d2b4d072f22091.mockapi.io/Todolist")
    const opcion = {method: 'GET'};

    const res = await fetch(url, opcion);
    const data = await res.json();
    return data;
}

export const addTask = async(task) => {
    const url = ("https://66760010a8d2b4d072f22091.mockapi.io/Todolist")
    const opcion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)

    };

    const res = await fetch(url, opcion)
    const data = await res.json();
    return data;
}
