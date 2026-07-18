const API_KEY = 'live_96xq6JSMpcp4oQ5XsZZkfSB2dSOK1oYCenAEH0rk80Fo2ke0wamXwLKv6FVp3dvP';

const BASE_URL = 'https://api.thecatapi.com/v1';


const btnTraerGato = document.querySelector('#btnTraerGato');
const catImage = document.querySelector('#catImage');
const loadingMessage = document.querySelector('#loadingMessage');
const errorMessage = document.querySelector('#errorMessage');
const votoMessage = document.querySelector('#votoMessage');

const btnMeGusta = document.querySelector('#btnMeGusta');
const btnNoMeGusta = document.querySelector('#btnNoMeGusta');

const countLikes = document.querySelector('#countLikes');
const countDislikes = document.querySelector('#countDislikes');

let likes = 0;
let dislikes = 0;
let currentImageId = null; // acá guardamos el id de la imagen actual para poder votarla

btnTraerGato.addEventListener('click', traerGato);
btnMeGusta.addEventListener('click', () => votar(1));
btnNoMeGusta.addEventListener('click', () => votar(-1));

// ==========================================
// NIVEL 1: Traer una imagen de gato
// ==========================================
async function traerGato() {
  limpiarMensajes();
  mostrarCarga(true);
  deshabilitarVotos(true);
  catImage.classList.add('hidden');

  try {
    const response = await fetch(`${BASE_URL}/images/search`);

    if (!response.ok) {
      throw new Error('La API respondió con un error.');
    }

    const data = await response.json(); // convertir la respuesta con .json()
    const gato = data[0];

    currentImageId = gato.id; // guardamos el id para votar después

    catImage.src = gato.url;
    catImage.classList.remove('hidden');
    deshabilitarVotos(false);
  } catch (error) {
    mostrarError('No se pudo traer una imagen de gato. Intentá de nuevo.');
    console.error(error);
  } finally {
    mostrarCarga(false);
  }
}

// ==========================================
// NIVEL 2 y 3: Votar la imagen actual
// ==========================================
async function votar(valor) {
  if (!currentImageId) return;

  limpiarMensajes();
  deshabilitarVotos(true);

  try {
    const response = await fetch(`${BASE_URL}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        image_id: currentImageId,
        value: valor
      })
    });

    if (!response.ok) {
      throw new Error('No se pudo registrar el voto.');
    }

    await response.json();

    // Actualizar el contador correspondiente
    if (valor === 1) {
      likes++;
      countLikes.textContent = likes;
    } else {
      dislikes++;
      countDislikes.textContent = dislikes;
    }

    votoMessage.textContent = '¡Voto registrado! 🐾';

    // Traer una nueva imagen automáticamente
    await traerGato();
  } catch (error) {
    mostrarError('Hubo un problema al votar. Revisá tu API key e intentá de nuevo.');
    console.error(error);
    deshabilitarVotos(false);
  }
}

// ==========================================
// Helpers de UI
// ==========================================
function mostrarCarga(mostrar) {
  loadingMessage.classList.toggle('hidden', !mostrar);
}

function deshabilitarVotos(deshabilitar) {
  btnMeGusta.disabled = deshabilitar;
  btnNoMeGusta.disabled = deshabilitar;
}

function mostrarError(mensaje) {
  errorMessage.textContent = mensaje;
}

function limpiarMensajes() {
  errorMessage.textContent = '';
  votoMessage.textContent = '';
}
