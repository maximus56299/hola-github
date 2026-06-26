const botonTema = document.getElementById("theme-toggle");
const iconoTema = document.getElementById("theme-icon");

botonTema.addEventListener("click", () => {
  const esClaro = document.body.getAttribute("data-tema") === "claro";
  if (esClaro) {
    document.body.removeAttribute("data-tema");
    iconoTema.textContent = "🌙";
  } else {
    document.body.setAttribute("data-tema", "claro");
    iconoTema.textContent = "☀️";
  }
});

const buscador = document.getElementById("buscador");
const fichas = Array.from(document.querySelectorAll(".ficha"));
const contadorResultados = document.getElementById("contador-resultados");
const sinResultados = document.getElementById("sin-resultados");

let filtroDificultad = "todas";
let filtroTiempo = "todas";

document.querySelectorAll("[data-filtro-dif]").forEach((boton) => {
  boton.addEventListener("click", () => {
    document.querySelectorAll("[data-filtro-dif]").forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");
    filtroDificultad = boton.dataset.filtroDif;
    aplicarFiltros();
  });
});

document.querySelectorAll("[data-filtro-tiempo]").forEach((boton) => {
  boton.addEventListener("click", () => {
    document.querySelectorAll("[data-filtro-tiempo]").forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");
    filtroTiempo = boton.dataset.filtroTiempo;
    aplicarFiltros();
  });
});

buscador.addEventListener("input", aplicarFiltros);

function aplicarFiltros() {
  const texto = buscador.value.trim().toLowerCase();
  let visibles = 0;

  fichas.forEach((ficha) => {
    const nombre = ficha.dataset.nombre;
    const dificultad = ficha.dataset.dificultad;
    const tiempo = ficha.dataset.tiempo;

    const coincideTexto = nombre.includes(texto);
    const coincideDificultad = filtroDificultad === "todas" || dificultad === filtroDificultad;
    const coincideTiempo = filtroTiempo === "todas" || tiempo === filtroTiempo;

    const visible = coincideTexto && coincideDificultad && coincideTiempo;
    ficha.style.display = visible ? "flex" : "none";
    if (visible) visibles++;
  });

  contadorResultados.textContent = `${visibles} ${visibles === 1 ? "guía encontrada" : "guías encontradas"}`;
  sinResultados.hidden = visibles !== 0;
}
