let appDiv = document.getElementById("app");

let nombre = prompt("cual es tu nombre?");
let edad = prompt("Cual es tu edad?");


appDiv.innerHTML = `Hello ${nombre}, you are ${edad} years old`;
console.log("console message!")

//-------------------
// var let y const

var nombreAlgoritmo = "Djastras";

console.log(nombreAlgoritmo);
nombreAlgoritmo = "value";
console.log(nombreAlgoritmo);

var carrito = "Pelota";
var carrito1 = "Pelota 2";

console.log(carrito);
console.log(carrito1);

let nombre = "John";
let apellidos = "Salchichon";
