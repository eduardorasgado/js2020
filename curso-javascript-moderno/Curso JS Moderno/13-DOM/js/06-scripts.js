const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText) // si en el CSS -visibility:hidden; no lo va a encontrar
console.log(encabezado.textContent) // si lo va a encontrar
console.log(encabezado.innerHTML) // se trae el html

// modificando el encabezado
encabezado.textContent = "Hotel Trivago!"

// consultando imagenes y cambiarlas
const image = document.querySelector('.card img')
image.src = "img/hacer2.jpg"
console.log(image);