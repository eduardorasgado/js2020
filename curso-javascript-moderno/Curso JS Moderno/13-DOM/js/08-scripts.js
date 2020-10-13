// DOM Traversing
const navegacion = document.querySelector("nav.navegacion");
console.log(navegacion.children[1]);

const card = document.querySelector(".card");

// Recorriendo el arbol del DOM
let cardContent = card.children[1].children[1].textContent;
console.log(cardContent);

card.children[1].children[1].textContent = "Concierto de musica cristiana 2020";
                                                                                                                                                                       