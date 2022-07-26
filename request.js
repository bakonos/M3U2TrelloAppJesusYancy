const API_URL = "https://my-json-server.typicode.com/bakonos/M3U2TrelloAppJesusYancy";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
  console.log(data)
};

const createTask = (task) => {
    // Creamos la estructura de las tarjetas desde el JS
    let newTask = document.createElement("article");
    //Creamos un elemento article y le pasamos una clase card-task
    newTask.classList.add("card-task");
  
    // Creamos un H3 para el titulo de las tarjetas
    let taskTitle = document.createElement("h3");
    // le añadimos una clase card-task__title
    taskTitle.classList.add("card-task__title");
    // y le añadimos el title de nuestra API "task.title"
    taskTitle.innerText = task.title;
  
    //creamos una etiqueta parrafo
    let taskResponsible = document.createElement("p");
    //le añadimos una clase card-task__responsible
    taskResponsible.classList.add("card_task__responsible");
    // le pasamos los datos del responsable de la tarea desde la API
    taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;
  
    // Creamos una etiqueta parrafo
    let taskDetails = document.createElement("p");
    //le añadimos una clase card-task__details
    taskDetails.classList.add("card-task__details");
    // Le pasamos los datos desde la API y los imprimimos en las tarjetas
    taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;

    let taskCreate = document.createElement("p");

    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    newTask.appendChild(taskDetails);
    newTask.appendChild(taskCreate);
  
    // Referenciamos por medio del ID las columnas
    let columnToDo = document.querySelector("#todoTasks");
    let columnInProgress = document.querySelector("#progressTasks");
    let columnDone = document.querySelector("#doneTasks");
  
    // Preguntamos dependiendo el state que trae nuestra API es igual a to-do lo ubique en esa columna
    if (task.state === "to-do") {
      columnToDo.appendChild(newTask);
    }
    if (task.state === "in-progress") {
      columnInProgress.appendChild(newTask);
    }
    if (task.state === "done") {
      columnDone.appendChild(newTask);
    }
  };