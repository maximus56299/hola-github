
alert("Hola mundo");
console.log("Hola mundo");



let nombre2 = prompt("¿Cómo te llamás?");
alert("Hola " + nombre2);
console.log("Hola " + nombre2);



let num1Ej3 = Number(prompt("Ingresá el primer número:"));
let num2Ej3 = Number(prompt("Ingresá el segundo número:"));
let sumaEj3 = num1Ej3 + num2Ej3;
alert("La suma es: " + sumaEj3);
console.log("La suma es: " + sumaEj3);



let edadEj4 = Number(prompt("Ingresá tu edad:"));
if (edadEj4 >= 18) {
  alert("Es mayor");
  console.log("Es mayor");
} else {
  alert("Es menor");
  console.log("Es menor");
}


let numEj5 = Number(prompt("Ingresá un número:"));
if (numEj5 % 2 === 0) {
  alert(numEj5 + " es par");
  console.log(numEj5 + " es par");
} else {
  alert(numEj5 + " es impar");
  console.log(numEj5 + " es impar");
}



let a6 = Number(prompt("Ingresá el primer número:"));
let b6 = Number(prompt("Ingresá el segundo número:"));
let c6 = Number(prompt("Ingresá el tercer número:"));
let mayorEj6 = a6;
if (b6 > mayorEj6) {
  mayorEj6 = b6;
}
if (c6 > mayorEj6) {
  mayorEj6 = c6;
}
alert("El número mayor es: " + mayorEj6);
console.log("El número mayor es: " + mayorEj6);



let notaEj7 = Number(prompt("Ingresá una nota del 1 al 10:"));
let mensajeEj7;
if (notaEj7 < 6) {
  mensajeEj7 = "Insuficiente";
} else if (notaEj7 < 8) {
  mensajeEj7 = "Aceptable";
} else {
  mensajeEj7 = "Muy bien";
}
alert(mensajeEj7);
console.log(mensajeEj7);



console.log("--- Ejercicio 8: contador del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}



console.log("--- Ejercicio 9: números pares del 1 al 20 ---");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



let passEj10 = prompt("Ingresá la contraseña:");
if (passEj10 === "1234") {
  alert("Correcta");
  console.log("Correcta");
} else {
  alert("Incorrecta");
  console.log("Incorrecta");
}



let sumaEj11 = 0;
let numeroEj11 = Number(prompt("Ingresá un número (0 para terminar):"));
while (numeroEj11 !== 0) {
  sumaEj11 += numeroEj11;
  numeroEj11 = Number(prompt("Ingresá otro número (0 para terminar):"));
}
alert("La suma total es: " + sumaEj11);
console.log("La suma total es: " + sumaEj11);



let n1Ej12 = Number(prompt("Ingresá el primer número:"));
let n2Ej12 = Number(prompt("Ingresá el segundo número:"));
let operacionEj12 = prompt(
  "¿Qué operación querés hacer?\n" +
  "Escribí: suma, resta, multiplicacion o division"
);

let resultadoEj12;
if (operacionEj12 === "suma") {
  resultadoEj12 = n1Ej12 + n2Ej12;
} else if (operacionEj12 === "resta") {
  resultadoEj12 = n1Ej12 - n2Ej12;
} else if (operacionEj12 === "multiplicacion") {
  resultadoEj12 = n1Ej12 * n2Ej12;
} else if (operacionEj12 === "division") {
  resultadoEj12 = n1Ej12 / n2Ej12;
} else {
  resultadoEj12 = "Operación no válida";
}

alert("Resultado: " + resultadoEj12);
console.log("Resultado: " + resultadoEj12);



let opcionEj13 = Number(prompt(
  "Elegí una opción:\n" +
  "1 - Saludar\n" +
  "2 - Mostrar fecha\n" +
  "3 - Mostrar número random"
));

if (opcionEj13 === 1) {
  alert("¡Hola! Bienvenido al programa.");
  console.log("¡Hola! Bienvenido al programa.");
} else if (opcionEj13 === 2) {
  let fechaEj13 = new Date();
  alert("Hoy es: " + fechaEj13.toLocaleDateString());
  console.log("Hoy es: " + fechaEj13.toLocaleDateString());
} else if (opcionEj13 === 3) {
  let randomEj13 = Math.floor(Math.random() * 100) + 1;
  alert("Número random: " + randomEj13);
  console.log("Número random: " + randomEj13);
} else {
  alert("Opción no válida");
  console.log("Opción no válida");
}



let numeroSecretoEj14 = Math.floor(Math.random() * 10) + 1;
let intentoEj14 = Number(prompt("Adiviná un número del 1 al 10:"));

if (intentoEj14 === numeroSecretoEj14) {
  alert("¡Felicitaciones! Adivinaste el número.");
  console.log("¡Felicitaciones! Adivinaste el número: " + numeroSecretoEj14);
} else {
  alert("No era ese número. El número secreto era: " + numeroSecretoEj14);
  console.log("Fallaste. El número secreto era: " + numeroSecretoEj14);
}



let contadorParesEj15 = 0;
let cantidadEj15 = Number(prompt("¿Cuántos números querés ingresar?"));

for (let i = 1; i <= cantidadEj15; i++) {
  let numeroIngresadoEj15 = Number(prompt("Ingresá el número " + i + ":"));
  if (numeroIngresadoEj15 % 2 === 0) {
    contadorParesEj15++;
  }
}

alert("Cantidad de números pares ingresados: " + contadorParesEj15);
console.log("Cantidad de números pares ingresados: " + contadorParesEj15);


let nombresEj16 = ["Ana", "Lucas", "Martina", "Tomás", "Sofía"];
console.log("--- Ejercicio 16: array de nombres ---");
console.log(nombresEj16);



console.log("--- Ejercicio 17: recorrer el array con for ---");
for (let i = 0; i < nombresEj16.length; i++) {
  console.log(nombresEj16[i]);
}



let numerosEj18 = [12, 45, 3, 78, 23, 9, 56];

let mayorEj18 = numerosEj18[0];
let menorEj18 = numerosEj18[0];

for (let i = 0; i < numerosEj18.length; i++) {
  if (numerosEj18[i] > mayorEj18) {
    mayorEj18 = numerosEj18[i];
  }
  if (numerosEj18[i] < menorEj18) {
    menorEj18 = numerosEj18[i];
  }
}

console.log("--- Ejercicio 18: mayor y menor del array ---");
console.log("Array: " + numerosEj18);
console.log("El número mayor es: " + mayorEj18);
console.log("El número menor es: " + menorEj18);
alert("Mayor: " + mayorEj18 + " | Menor: " + menorEj18);



let notasEj19 = [7, 9, 5, 8, 10];
let sumaNotasEj19 = 0;

for (let i = 0; i < notasEj19.length; i++) {
  sumaNotasEj19 += notasEj19[i];
}

let promedioEj19 = sumaNotasEj19 / notasEj19.length;

console.log("--- Ejercicio 19: promedio de notas ---");
console.log("Notas: " + notasEj19);
console.log("Promedio: " + promedioEj19);
alert("El promedio de las notas es: " + promedioEj19);



let listaNombresEj20 = [];
let nombreIngresadoEj20 = prompt("Ingresá un nombre (o 'salir' para terminar):");

while (nombreIngresadoEj20 !== "salir" && nombreIngresadoEj20 !== null) {
  listaNombresEj20.push(nombreIngresadoEj20);
  nombreIngresadoEj20 = prompt("Ingresá otro nombre (o 'salir' para terminar):");
}

console.log("--- Ejercicio 20: nombres ingresados ---");
console.log(listaNombresEj20);
alert("Nombres ingresados: " + listaNombresEj20.join(", "));



console.log("--- Ejercicio 21: cantidad de elementos ---");
console.log("El array de nombres ingresados tiene " + listaNombresEj20.length + " elementos");
alert("Cantidad de elementos: " + listaNombresEj20.length);



let numerosEj22 = [4, 7, 10, 15, 22, 33, 40, 51];
let paresEj22 = [];

for (let i = 0; i < numerosEj22.length; i++) {
  if (numerosEj22[i] % 2 === 0) {
    paresEj22.push(numerosEj22[i]);
  }
}

console.log("--- Ejercicio 22: solo los números pares ---");
console.log("Array original: " + numerosEj22);
console.log("Números pares: " + paresEj22);
alert("Números pares: " + paresEj22.join(", "));



let frutasEj23 = ["manzana", "banana", "pera", "naranja", "uva"];
let frutaBuscadaEj23 = prompt("¿Qué fruta querés buscar?");

if (frutasEj23.includes(frutaBuscadaEj23)) {
  alert("Sí, " + frutaBuscadaEj23 + " está en la lista");
  console.log("Sí, " + frutaBuscadaEj23 + " está en la lista");
} else {
  alert("No, " + frutaBuscadaEj23 + " no está en la lista");
  console.log("No, " + frutaBuscadaEj23 + " no está en la lista");
}



let coloresEj24 = ["rojo", "verde", "azul", "amarillo"];
console.log("--- Ejercicio 24: eliminar el último elemento ---");
console.log("Array antes de pop(): " + coloresEj24);

let elementoEliminadoEj24 = coloresEj24.pop();

console.log("Elemento eliminado: " + elementoEliminadoEj24);
console.log("Array después de pop(): " + coloresEj24);
alert("Se eliminó: " + elementoEliminadoEj24 + ". Array ahora: " + coloresEj24.join(", "));



console.log("--- Ejercicio 25: agregar elementos con push() ---");
console.log("Array antes de push(): " + coloresEj24);

coloresEj24.push("violeta");

console.log("Array después de push(): " + coloresEj24);
alert("Array final: " + coloresEj24.join(", "));
