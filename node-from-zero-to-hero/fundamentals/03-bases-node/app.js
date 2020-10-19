const argvModule = require('yargs');
const { crearArchivo } = require("./multiplicar/multiplicar");

//-------FORMA SIMPLE DE MANIPULAR ARGUMENTOS DE CONSOLA-------
// consiguendo los argumentos de la consola, de forma simple
let argv2 = process.argv;
//let parametro = argv[2];
// --base=5 consiguiendo el parametro de la base en args
//let base = parametro.split("=")[1];
// -----------------------------------------

// para conseguir los argumentos de manera ordenada con ayuda de yargs
// Configuando los comandos de ayuda para la consola
argvModule.command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        describe: "La base de la tabla que deseas obtener e.g: --base:5" 
    }
});
let argv = argvModule.argv;
console.log(argv);


// utilizando el modulo que creamos en el folder multiplicar
crearArchivo(argv.base, argv.limite)
    .then( archivo => {
        console.log(`Se ha creado el archivo de nombre: ${archivo}`)
    })
    .catch(e => console.log("ERROR: ", e));