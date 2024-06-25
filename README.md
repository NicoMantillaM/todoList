# To-do List Application

## Descripción

Este es un proyecto de lista de tareas que permite a los usuarios agregar, eliminar y actualizar tareas. La aplicación se conecta a una API para almacenar y recuperar las tareas.



## Tecnologías Utilizadas

- **HTML5**: Utilizado para la estructura del contenido de la aplicación.

- **CSS3**: Utilizado para el diseño y la presentación de la aplicación.

- **JavaScript (ES6+)**: Utilizado para la lógica de la aplicación.

- **Fetch API**: Utilizado para realizar solicitudes HTTP a la API.

- **MockAPI**: Utilizado como un backend falso para almacenar y recuperar tareas.

  

## Estructura del Proyecto

```
cssCopiar códigoTo-do-List/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── components/
│   │   └── list.js
│   └── module/
│       └── api.js
└── storage/
    └── img/
        ├── check.png
        └── trash.png
```

- **index.html**: El archivo principal HTML.
- **css/style.css**: Archivo de estilos CSS.
- **js/main.js**: Archivo JavaScript principal que maneja la lógica de la aplicación.
- **js/components/list.js**: Archivo que contiene la plantilla para renderizar las tareas.
- **js/module/api.js**: Archivo que contiene las funciones para interactuar con la API.
- **storage/img/**: Carpeta que contiene las imágenes utilizadas en la aplicación.

## Instalación

1. Clona el repositorio a tu máquina local:

   ```
   https://github.com/NicoMantillaM/todoList.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd todoList
   ```

3. Abre el archivo `index.html` en tu navegador preferido para ver la aplicación en funcionamiento.

## Uso

### Agregar una Tarea

1. Escribe el nombre de la tarea en el campo de entrada.
2. Haz clic en el botón "I Got This!" para agregar la tarea. La nueva tarea se añadirá con el estado "On hold".

### Eliminar una Tarea

1. Haz clic en el ícono de la papelera al lado de la tarea que deseas eliminar.
2. La tarea se eliminará tanto de la vista como de la API.

### Actualizar el Estado de una Tarea

1. Haz clic en el ícono de check al lado de la tarea que deseas marcar como "ready".
2. La tarea se moverá a la sección "Ready".