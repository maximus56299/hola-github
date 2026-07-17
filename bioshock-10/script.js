// ==========================================
// NIVEL 1
// ==========================================

// 1. Cambiar el texto de un título usando textContent
const btnChangeTitle = document.getElementById('btnChangeTitle');
const newTitleInput = document.getElementById('newTitleInput');
const mainTitle = document.getElementById('mainTitle');

btnChangeTitle.addEventListener('click', () => {
  if (newTitleInput.value.trim() !== '') {
    mainTitle.textContent = newTitleInput.value;
    newTitleInput.value = '';
  }
});

// 2. Cambiar el contenido de un párrafo usando innerHTML
const btnChangeParagraph = document.getElementById('btnChangeParagraph');
const newParagraphInput = document.getElementById('newParagraphInput');
const mainParagraph = document.getElementById('mainParagraph');

btnChangeParagraph.addEventListener('click', () => {
  if (newParagraphInput.value.trim() !== '') {
    mainParagraph.innerHTML = newParagraphInput.value;
    newParagraphInput.value = '';
  }
});

// 3. Cambiar la imagen de la página usando src
const btnChangeImage = document.getElementById('btnChangeImage');
const mainImage = document.getElementById('mainImage');
const imageOptions = [
  'https://placehold.co/300x200?text=Imagen+1',
  'https://placehold.co/300x200?text=Imagen+2',
  'https://placehold.co/300x200?text=Imagen+3'
];
let imageIndex = 0;

btnChangeImage.addEventListener('click', () => {
  imageIndex = (imageIndex + 1) % imageOptions.length;
  mainImage.src = imageOptions[imageIndex];
});

// 4. Mostrar un alert con la información escrita por el usuario en un input, usando value
const btnShowAlert = document.getElementById('btnShowAlert');
const alertInput = document.getElementById('alertInput');

btnShowAlert.addEventListener('click', () => {
  alert(alertInput.value !== '' ? alertInput.value : 'No escribiste nada');
});

// 5 y 6. Agregar y quitar una clase CSS usando classList.add() y classList.remove()
const btnAddClass = document.getElementById('btnAddClass');
const btnRemoveClass = document.getElementById('btnRemoveClass');
const classTarget = document.getElementById('classTarget');

btnAddClass.addEventListener('click', () => {
  classTarget.classList.add('highlight');
});

btnRemoveClass.addEventListener('click', () => {
  classTarget.classList.remove('highlight');
});

// 7. Botón "Modo oscuro" usando classList.toggle()
const btnDarkMode = document.getElementById('btnDarkMode');

btnDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 8. Crear y agregar elementos nuevos a una lista usando createElement() y appendChild()
const btnAddListItem = document.getElementById('btnAddListItem');
const listInput = document.getElementById('listInput');
const itemList = document.getElementById('itemList');

btnAddListItem.addEventListener('click', () => {
  if (listInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = listInput.value;
    itemList.appendChild(li);
    listInput.value = '';
  }
});


// ==========================================
// NIVEL 3 - Formulario con validación
// ==========================================

const mainForm = document.getElementById('mainForm');
const nombreInput = document.getElementById('nombre');
const colorInput = document.getElementById('colorFavorito');
const mensajeInput = document.getElementById('mensaje');

const errorNombre = document.getElementById('errorNombre');
const errorColor = document.getElementById('errorColor');
const errorMensaje = document.getElementById('errorMensaje');

const resultado = document.getElementById('resultado');
const cardsContainer = document.getElementById('cardsContainer');

function mostrarError(input, spanError, mensaje) {
  input.classList.add('input-error');
  spanError.textContent = mensaje;
}

function limpiarError(input, spanError) {
  input.classList.remove('input-error');
  spanError.textContent = '';
}

function esColorValido(valor) {
  // Usa el propio navegador para validar si el string es un color CSS válido
  const s = new Option().style;
  s.color = '';
  s.color = valor;
  return s.color !== '';
}

mainForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let esValido = true;

  // Validar que los campos no estén vacíos
  if (nombreInput.value.trim() === '') {
    mostrarError(nombreInput, errorNombre, 'El nombre no puede estar vacío.');
    esValido = false;
  } else {
    limpiarError(nombreInput, errorNombre);
  }

  if (colorInput.value.trim() === '') {
    mostrarError(colorInput, errorColor, 'Elige un color favorito.');
    esValido = false;
  } else if (!esColorValido(colorInput.value.trim())) {
    mostrarError(colorInput, errorColor, 'Ese no parece un color CSS válido (ej: red, #00ff00).');
    esValido = false;
  } else {
    limpiarError(colorInput, errorColor);
  }

  if (mensajeInput.value.trim() === '') {
    mostrarError(mensajeInput, errorMensaje, 'El mensaje no puede estar vacío.');
    esValido = false;
  } else {
    limpiarError(mensajeInput, errorMensaje);
  }

  if (!esValido) {
    resultado.classList.remove('visible');
    return;
  }

  const nombre = nombreInput.value.trim();
  const color = colorInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Mostrar los datos en pantalla
  resultado.innerHTML = `
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Color favorito:</strong> ${color}<br>
    <strong>Mensaje:</strong> ${mensaje}
  `;
  resultado.classList.add('visible');

  // Cambiar colores de algún elemento (el propio resultado toma el color favorito)
  resultado.style.borderLeft = `8px solid ${color}`;

  // Agregar una tarjeta nueva con la información (createElement + appendChild)
  const card = document.createElement('div');
  card.classList.add('info-card');
  card.style.borderTop = `4px solid ${color}`;

  const cardTitle = document.createElement('h4');
  cardTitle.textContent = nombre;

  const cardColor = document.createElement('p');
  cardColor.textContent = `Color: ${color}`;

  const cardMensaje = document.createElement('p');
  cardMensaje.textContent = mensaje;

  card.appendChild(cardTitle);
  card.appendChild(cardColor);
  card.appendChild(cardMensaje);
  cardsContainer.appendChild(card);

  // Limpiar el formulario
  mainForm.reset();
});
