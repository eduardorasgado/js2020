let appDiv = document.getElementById("app");

let nombre = prompt("cual es tu nombre?");
let edad = prompt("Cual es tu edad?");

appDiv.innerHTML = `Hola ${nombre}, tu edad es ${edad} years old`;