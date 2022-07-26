const API_URL = "https://my-json-server.typicode.com/Stiwar9816/kanbanApp";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

  const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};