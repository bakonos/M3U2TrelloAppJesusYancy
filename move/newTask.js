const form = document.querySelector('#form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = ev.target;

    const data = {
        title: formData.titulo_tarea?.value,
        person: formData.Responsable_tarea?.value,
        details: formData.detailsTask?.value,
        deadline: formData.fecha_entrega?.value,
        state: 'to-do'
    }
    console.log(data)
    axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
      formData.reset();
    })
    .catch((err) => console.error(err));
})