const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argvModule } = require('./config/yargs');

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