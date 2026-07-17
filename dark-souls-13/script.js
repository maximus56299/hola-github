// ==========================================
// Referencias al DOM
// ==========================================
const btnTraerChiste = document.querySelector('#btnTraerChiste');
const jokeContainer = document.querySelector('#jokeContainer');
const loadingMessage = document.querySelector('#loadingMessage');
const errorMessage = document.querySelector('#errorMessage');

const categoriaSelect = document.querySelector('#categoria');
const tipoSelect = document.querySelector('#tipo');
const idiomaSelect = document.querySelector('#idioma');
const flagCheckboxes = document.querySelectorAll('.flag');

// URL base de la JokeAPI (funciona tanto la nueva como la vieja de sv443.net)
const BASE_URL = 'https://sv443.net/jokeapi/v2';

btnTraerChiste.addEventListener('click', () => {
  traerChiste();
});

// ==========================================
// NIVEL 1, 2 y 3: Pedir chiste a la API
// ==========================================
async function traerChiste() {
  const categoria = categoriaSelect.value;
  const tipo = tipoSelect.value;
  const idioma = idiomaSelect.value;

  // Armar la lista de flags a excluir (checkboxes tildados)
  const flagsExcluidos = Array.from(flagCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const url = construirUrl(categoria, tipo, idioma, flagsExcluidos);

  mostrarCarga(true);
  limpiarError();
  jokeContainer.innerHTML = '';
  btnTraerChiste.disabled = true;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('La API respondió con un error.');
    }

    const data = await response.json(); // convertir la respuesta con .json()

    if (data.error) {
      // La JokeAPI devuelve { error: true, message: "..." } cuando algo falla
      mostrarError(data.message || 'No se encontró ningún chiste con esos filtros.');
    } else {
      mostrarChiste(data);
    }
  } catch (error) {
    mostrarError('No se pudo conectar con la API. Intentá de nuevo.');
    console.error(error);
  } finally {
    mostrarCarga(false);
    btnTraerChiste.disabled = false;
  }
}

// Construye la URL de la petición con todos los filtros elegidos
function construirUrl(categoria, tipo, idioma, flagsExcluidos) {
  let url = `${BASE_URL}/joke/${categoria}?lang=${idioma}`;

  if (tipo !== '') {
    url += `&type=${tipo}`;
  }

  if (flagsExcluidos.length > 0) {
    url += `&blacklistFlags=${flagsExcluidos.join(',')}`;
  }

  return url;
}

// Muestra el chiste en pantalla (soporta chistes "single" y "twopart")
function mostrarChiste(data) {
  jokeContainer.innerHTML = '';

  const categoriaSpan = document.createElement('span');
  categoriaSpan.classList.add('joke-category');
  categoriaSpan.textContent = data.category;
  jokeContainer.appendChild(categoriaSpan);

  if (data.type === 'single') {
    const p = document.createElement('p');
    p.classList.add('joke-delivery');
    p.textContent = data.joke;
    jokeContainer.appendChild(p);
  } else {
    const setup = document.createElement('p');
    setup.classList.add('joke-setup');
    setup.textContent = data.setup;

    const delivery = document.createElement('p');
    delivery.classList.add('joke-delivery');
    delivery.textContent = data.delivery;

    jokeContainer.appendChild(setup);
    jokeContainer.appendChild(delivery);
  }
}

function mostrarCarga(mostrar) {
  loadingMessage.classList.toggle('hidden', !mostrar);
}

function mostrarError(mensaje) {
  errorMessage.textContent = mensaje;
}

function limpiarError() {
  errorMessage.textContent = '';
}
