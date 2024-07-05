export const getAllTask = async() => {
    const url = (`https://66882f670bc7155dc01ab4f6.mockapi.io/Todolist`)
    const opcion = {method: 'GET'};

    const res = await fetch(url, opcion);
    const data = await res.json();
    return data;
}

export const addTask = async(task) => {
    const url = (`https://66882f670bc7155dc01ab4f6.mockapi.io/Todolist`)
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

export const deleteTask = async (id) => {
    const url = `https://66882f670bc7155dc01ab4f6.mockapi.io/Todolist/${id}`;
    const opcion = { method: 'DELETE' };

    const res = await fetch(url, opcion);
    const data = await res.json();
    return data;
};

export const checkTask = async(id, updateTask) => {
    const url = `https://66882f670bc7155dc01ab4f6.mockapi.io/Todolist/${id}`;
    const opcion = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateTask)
    };

    const res = await fetch(url, opcion)
    const data = await res.json();
    return data;
}