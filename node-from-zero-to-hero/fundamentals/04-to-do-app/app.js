const { argv } = require('./config/yargs');
const api = require('./api/api');

if(argv.argv._[0] == undefined) {
    console.log('[Introduzca un comando]');
    argv.showHelp();
    return;
}
let command = argv.argv._[0];
//console.log(argv.argv);
// Creacion de tareas por hacer
// node app crear -d "Pasear a Solovino"
// node app listar
// node app actualizar -d "Pasear a Solovino" -c true

// Llenando la lista de las actividades persistentes
api.arranque();

const handlingCrear = async(d) => {
    let result = await api.crear(d)
    return result;
};

switch(command) {
    case "crear":
        handlingCrear(argv.argv.descripcion)
        .then(result => {
            console.log(result);
        })
        .catch(e => {console.log('ERROR: ', e);});
        break;
    case "listar":
        console.log("Listando todas las tareas registradas hasta el momento");
        break;
    case "actualizar":
        console.log("Actualizando una tarea como 'hecha'");
        break;
    case "reiniciar":
        console.log("Reinicia la lista, pero deja las tareas que no se han hecho");
        break;
    default:
        console.log("Comando Invalido");
};