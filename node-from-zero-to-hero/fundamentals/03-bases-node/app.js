const argvModule = require('yargs');
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// para conseguir los argumentos de manera ordenada con ayuda de yargs
// Configuando los comandos de ayuda para la consola
argvModule.command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        describe: "La base de la tabla que deseas obtener e.g: --base=9",
        alias:'b',
        type: 'number'
    },
    limite: {
        demand: false,
        describe: "Limite superior de la tabla requerida, e.g: --limite=5",
        alias: 'l',
        default: 10,
        type: 'number'
    }
});

let argv = argvModule.help().argv;


switch(argv._[0]) {
    case 'listar':
        console.log('[LISTANDO TABLA]');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log('Error: ', err));
        break;
    case 'crear':
        console.log('[CREANDO TABLA]');
        // utilizando el modulo que creamos en el folder multiplicar
        crearArchivo(argv.base, argv.limite)
            .then( archivo => {
                console.log(`Se ha creado el archivo de nombre: ${archivo}`)
            })
            .catch(e => console.log("ERROR: ", e));
        break;
    default:
        console.log('[ACCION INVALIDA]');
}

// para asegurarse de que se esta imprimiendo despues de que se obtiene la tabla
// ya que las funciones de tabla son asincronas
setTimeout(() => {
    console.log('[Saliendo del programa]');
}, 400);