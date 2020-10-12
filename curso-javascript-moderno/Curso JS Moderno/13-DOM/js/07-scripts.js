const encabezado = document.querySelector('h1')
// cambiando estilos de CSS con JS  
encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = 'uppercase';

console.log(encabezado);

// agregando nuevas clases desde JS
const card = document.querySelector(".card");
console.log(card.classList);
card.classList.add("nueva-clase", "segunda-clase");
console.log(card.classList);
card.classList.remove("card");
console.log(card.classList);