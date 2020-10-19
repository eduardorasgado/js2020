const { time, log } = require("console");
const { crearArchivo } = require("./multiplicar/multiplicar");

let argv = process.argv;
let parametro = argv[2];
// --base=5 consiguiendo el parametro de la base en args
let base = parametro.split("=")[1];

// utilizando el modulo que creamos en el folder multiplicar
crearArchivo(base)
    .then( archivo => {
        console.log(`Se ha creado el archivo de nombre: ${archivo}`)
    })
    .catch(e => console.log("ERROR: ", e));