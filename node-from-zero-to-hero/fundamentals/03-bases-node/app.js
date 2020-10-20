const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require('./config/yargs');
const colors = require("colors");


switch(argv._[0]) {
    case 'listar':
        console.log(`[LISTANDO TABLA DEL ${argv.base}]`.blue);
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.yellow))
            .catch(err => console.log('Error: ', err));
        break;
    case 'crear':
        console.log(`[CREANDO TABLA ${argv.base}]`.blue);
        // utilizando el modulo que creamos en el folder multiplicar
        crearArchivo(argv.base, argv.limite)
            .then( archivo => {
                console.log(`Se ha creado el archivo de nombre: ${archivo.red}`)
            })
            .catch(e => console.log("ERROR: ", e));
        break;
    default:
        console.log('[ACCION INVALIDA]'.red);
}

// para asegurarse de que se esta imprimiendo despues de que se obtiene la tabla
// ya que las funciones de tabla son asincronas
setTimeout(() => {
    console.log('[Saliendo del programa]'.green);
}, 400);