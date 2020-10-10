const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' ];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 10100 },
    { nombre: 'Tablet', precio: 2200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 4200 }
];

// foreach
meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log("Enero si existe");
    }
});

// includes
const resultado = meses.includes("Abril");
console.log(resultado);

// some
const existInList = carrito.some( car => { car.nombre === 'Taladro'});

console.log(existInList);

// findIndex: saber en que indice se encuentra nuestro elemento
console.log(meses.findIndex( (element, i) => element === 'Abril'));


let totalCarrito = carrito.reduce((total, producto) => {
    return total + producto.precio;
}, 0)

console.log(totalCarrito);

// filter
let expensiveCarrito = carrito.filter(producto => {
    return producto.precio > 1000;
})

console.log(expensiveCarrito);

// find
let elmt = carrito.find(producto => producto.nombre == 'Television');
console.log(elmt);

// every
elmt = carrito.every(producto => producto.precio < 20000);
console.log(elmt);

// concat
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const monthsOfYear = meses.concat(meses2);
console.log(monthsOfYear);
console.log('-----------------');
const monthsOfYear2 = [...meses, ...meses2];
console.log(monthsOfYear2);