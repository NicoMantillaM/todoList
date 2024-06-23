export const getAllTask = async() => {
    const url = ("https://66760010a8d2b4d072f22091.mockapi.io/Todolist")
    const opcion = {method: 'GET'};

    const res = await fetch(url, opcion);
    const data = await res.json();
    return data;
}

