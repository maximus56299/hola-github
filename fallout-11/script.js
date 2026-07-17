// ==========================================
// Referencias al DOM
// ==========================================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const errorTask = document.getElementById('errorTask');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

const countTotal = document.getElementById('countTotal');
const countCompletadas = document.getElementById('countCompletadas');
const countPendientes = document.getElementById('countPendientes');

const filterButtons = document.querySelectorAll('.filter-btn');
const btnBorrarTodas = document.getElementById('btnBorrarTodas');

let filtroActual = 'todas';

// ==========================================
// NIVEL 1: Agregar tarea
// ==========================================
taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // evitar que se recargue la página

  const texto = taskInput.value.trim(); // leer el valor del input usando value

  if (texto === '') {
    errorTask.textContent = 'La tarea no puede estar vacía.';
    taskInput.classList.add('input-error');
    return;
  }

  errorTask.textContent = '';
  taskInput.classList.remove('input-error');

  crearTarea(texto);

  taskInput.value = '';
  taskInput.focus();
  actualizarTodo();
});

// Crear un elemento de tarea nuevo y agregarlo a la lista
function crearTarea(texto) {
  const li = document.createElement('li'); // createElement()
  li.classList.add('task-item');

  const span = document.createElement('span');
  span.classList.add('task-text');
  span.textContent = texto;

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('task-buttons');

  const btnCompletar = document.createElement('button');
  btnCompletar.textContent = 'Completar';
  btnCompletar.classList.add('btn-completar');
  btnCompletar.type = 'button';

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.classList.add('btn-eliminar');
  btnEliminar.type = 'button';

  buttonsDiv.appendChild(btnCompletar);
  buttonsDiv.appendChild(btnEliminar);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  taskList.appendChild(li); // appendChild()

  // ==========================================
  // NIVEL 2: Completar tarea
  // ==========================================
  btnCompletar.addEventListener('click', () => {
    li.classList.toggle('completada'); // classList.toggle()
    btnCompletar.textContent = li.classList.contains('completada') ? 'Deshacer' : 'Completar';
    actualizarTodo();
  });

  // ==========================================
  // NIVEL 2: Eliminar tarea
  // ==========================================
  btnEliminar.addEventListener('click', () => {
    li.remove(); // remove()
    actualizarTodo();
  });
}

// ==========================================
// NIVEL 3: Contador de tareas
// ==========================================
function actualizarContador() {
  const todas = taskList.querySelectorAll('.task-item');
  const completadas = taskList.querySelectorAll('.task-item.completada');

  const total = todas.length;
  const completadasCount = completadas.length;
  const pendientesCount = total - completadasCount;

  countTotal.textContent = total;
  countCompletadas.textContent = completadasCount;
  countPendientes.textContent = pendientesCount;
}

// ==========================================
// NIVEL 3: Filtro de tareas
// ==========================================
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    filtroActual = btn.dataset.filter;
    aplicarFiltro();
  });
});

function aplicarFiltro() {
  const todas = taskList.querySelectorAll('.task-item');

  todas.forEach((tarea) => {
    const esCompletada = tarea.classList.contains('completada');
    let mostrar = true;

    if (filtroActual === 'completadas') {
      mostrar = esCompletada;
    } else if (filtroActual === 'pendientes') {
      mostrar = !esCompletada;
    }

    tarea.classList.toggle('hidden', !mostrar);
  });

  actualizarMensajeVacio();
}

// Mostrar mensaje si no hay tareas visibles
function actualizarMensajeVacio() {
  const visibles = taskList.querySelectorAll('.task-item:not(.hidden)');
  emptyMessage.classList.toggle('hidden', visibles.length > 0);
}

// ==========================================
// NIVEL 3: Borrar todas las tareas
// ==========================================
btnBorrarTodas.addEventListener('click', () => {
  const todas = taskList.querySelectorAll('.task-item');
  if (todas.length === 0) return;

  const confirmar = confirm('¿Seguro que quieres borrar todas las tareas?');
  if (confirmar) {
    taskList.innerHTML = '';
    actualizarTodo();
  }
});

// Función que agrupa las actualizaciones necesarias tras cualquier cambio
function actualizarTodo() {
  actualizarContador();
  aplicarFiltro();
}

// Estado inicial
actualizarTodo();
