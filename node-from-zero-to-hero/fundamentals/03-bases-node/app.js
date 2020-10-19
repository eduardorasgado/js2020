const { time, log } = require("console");
const { crearArchivo } = require("./multiplicar/multiplicar");

let base = 0;

crearArchivo(base)
    .then( archivo => {
        console.log(`Se ha creado el archivo de nombre: ${archivo}`)
    });