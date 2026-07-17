// ==========================================
// Referencias al DOM (querySelector / querySelectorAll)
// ==========================================
const collectionForm = document.querySelector('#collectionForm');
const nombreInput = document.querySelector('#nombre');
const descripcionInput = document.querySelector('#descripcion');
const tipoSelect = document.querySelector('#tipo');
const otroTipoRow = document.querySelector('#otroTipoRow');
const otroTipoInput = document.querySelector('#otroTipo');
const estadoSelect = document.querySelector('#estado');
const calificacionInput = document.querySelector('#calificacion');
const imagenInput = document.querySelector('#imagen');

const errorMessage = document.querySelector('#errorMessage');
const counter = document.querySelector('#counter');
const cardsContainer = document.querySelector('#cardsContainer');
const emptyMessage = document.querySelector('#emptyMessage');
const filterButtons = document.querySelectorAll('.filter-btn');
const btnModo = document.querySelector('#btnModo');

let totalElementos = 0;
let filtroActual = 'todos';

// Mostrar el campo "Otro" solo si el tipo elegido es "otro"
tipoSelect.addEventListener('change', () => {
  otroTipoRow.classList.toggle('hidden', tipoSelect.value !== 'otro');
});

// Textos legibles para tipo y estado
const nombresTipo = {
  videojuego: 'Videojuego',
  pelicula: 'Película',
  serie: 'Serie',
  otro: 'Otro'
};

const nombresEstado = {
  pendiente: 'Pendiente',
  'en-progreso': 'En progreso',
  terminado: 'Terminado'
};

// Orden en el que se cicla el estado al tocar "Cambiar estado"
const ordenEstados = ['pendiente', 'en-progreso', 'terminado'];

// ==========================================
// NIVEL 1: Escuchar el submit del formulario
// ==========================================
collectionForm.addEventListener('submit', (event) => {
  event.preventDefault(); // evitar que se recargue la página

  const nombre = nombreInput.value.trim();
  const descripcion = descripcionInput.value.trim();
  const tipo = tipoSelect.value;
  const otroTipo = otroTipoInput.value.trim();
  const estado = estadoSelect.value;
  const calificacion = Number(calificacionInput.value);
  const imagen = imagenInput.value.trim();

  // Limpiar estilos de error previos
  [nombreInput, calificacionInput, otroTipoInput].forEach((input) =>
    input.classList.remove('input-error')
  );

  // Validar que el nombre no esté vacío
  if (nombre === '') {
    mostrarError('El nombre no puede estar vacío.');
    nombreInput.classList.add('input-error');
    return;
  }

  // Validar tipo "otro"
  if (tipo === 'otro' && otroTipo === '') {
    mostrarError('Especificá el tipo si elegiste "Otro".');
    otroTipoInput.classList.add('input-error');
    return;
  }

  // Validar que la calificación esté entre 1 y 5
  if (!calificacion || calificacion < 1 || calificacion > 5) {
    mostrarError('La calificación debe ser un número entre 1 y 5.');
    calificacionInput.classList.add('input-error');
    return;
  }

  limpiarError();

  const tipoFinal = tipo === 'otro' ? otroTipo : tipo;

  crearTarjeta({
    nombre,
    descripcion: descripcion !== '' ? descripcion : 'Sin descripción.',
    tipo,
    tipoFinal,
    estado,
    calificacion,
    imagen: imagen !== '' ? imagen : 'https://placehold.co/300x180?text=Sin+imagen'
  });

  collectionForm.reset();
  otroTipoRow.classList.add('hidden');

  totalElementos++;
  actualizarContador();
  aplicarFiltro();
});

function mostrarError(mensaje) {
  errorMessage.textContent = mensaje;
}

function limpiarError() {
  errorMessage.textContent = '';
}

// ==========================================
// NIVEL 2: Crear tarjetas dinámicamente
// ==========================================
function crearTarjeta(datos) {
  const card = document.createElement('div'); // createElement()
  card.classList.add('card'); // classList.add()

  // Guardamos tipo y estado como atributos de datos para poder filtrar después
  card.setAttribute('data-tipo', datos.tipo); // setAttribute()
  card.dataset.estado = datos.estado; // dataset
  card.dataset.calificacion = datos.calificacion;

  card.innerHTML = `
    <img src="${datos.imagen}" alt="${datos.nombre}" class="card-img">
    <div class="card-body">
      <h3 class="card-title">${datos.nombre}</h3>
      <p class="card-descripcion">${datos.descripcion}</p>
      <p class="card-meta">Tipo: ${nombresTipo[datos.tipo] || datos.tipoFinal}</p>
      <p class="card-calificacion">${'★'.repeat(datos.calificacion)}${'☆'.repeat(5 - datos.calificacion)}</p>
      <span class="card-estado ${datos.estado}">${nombresEstado[datos.estado]}</span>
      <div class="card-buttons">
        <button type="button" class="btn-cambiar-estado">Cambiar estado</button>
        <button type="button" class="btn-eliminar">Eliminar</button>
      </div>
    </div>
  `;

  cardsContainer.appendChild(card); // appendChild()

  const cardTitle = card.querySelector('.card-title');
  const cardEstado = card.querySelector('.card-estado');
  const btnCambiarEstado = card.querySelector('.btn-cambiar-estado');
  const btnEliminar = card.querySelector('.btn-eliminar');

  // Al hacer clic sobre el nombre: efecto visual (agrandar / subrayar / cambiar color)
  cardTitle.addEventListener('click', () => {
    cardTitle.classList.toggle('destacado');
  });

  // Botón "Cambiar estado": cicla Pendiente -> En progreso -> Terminado -> Pendiente
  btnCambiarEstado.addEventListener('click', () => {
    const indexActual = ordenEstados.indexOf(card.dataset.estado);
    const nuevoEstado = ordenEstados[(indexActual + 1) % ordenEstados.length];

    card.dataset.estado = nuevoEstado;
    cardEstado.textContent = nombresEstado[nuevoEstado];
    cardEstado.className = `card-estado ${nuevoEstado}`;

    aplicarFiltro();
  });

  // Botón "Eliminar": borra la tarjeta del DOM
  btnEliminar.addEventListener('click', () => {
    card.remove();
    totalElementos--;
    actualizarContador();
    aplicarFiltro();
  });
}

// ==========================================
// Contador de elementos
// ==========================================
function actualizarContador() {
  counter.textContent = `Elementos agregados: ${totalElementos}`;
}

// ==========================================
// NIVEL 3: Filtros
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
  const todasLasTarjetas = document.querySelectorAll('.card'); // querySelectorAll()

  todasLasTarjetas.forEach((card) => {
    const tipo = card.dataset.tipo;
    const estado = card.dataset.estado;
    const calificacion = Number(card.dataset.calificacion);

    let mostrar = true;

    if (filtroActual === 'todos') {
      mostrar = true;
    } else if (filtroActual === 'favoritos') {
      // Consideramos "favorito" a todo elemento con calificación 5
      mostrar = calificacion === 5;
    } else if (['videojuego', 'pelicula', 'serie'].includes(filtroActual)) {
      mostrar = tipo === filtroActual;
    } else {
      mostrar = estado === filtroActual;
    }

    card.classList.toggle('hidden', !mostrar);
  });

  actualizarMensajeVacio();
}

function actualizarMensajeVacio() {
  const visibles = document.querySelectorAll('.card:not(.hidden)');
  emptyMessage.classList.toggle('hidden', visibles.length > 0);
  if (visibles.length === 0 && totalElementos > 0) {
    emptyMessage.textContent = 'No hay elementos que coincidan con este filtro.';
  } else {
    emptyMessage.textContent = 'Todavía no agregaste elementos a tu colección.';
  }
}

// ==========================================
// NIVEL 3: Cambiar modo (claro / oscuro)
// ==========================================
btnModo.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Estado inicial
actualizarContador();
actualizarMensajeVacio();
