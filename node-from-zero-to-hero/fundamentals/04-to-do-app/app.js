const { argv } = require('./config/yargs');


if(argv.argv._[0] == undefined) {
    console.log('[Introduzca un comando]');
    argv.showHelp();
    return;
}
let command = argv.argv._[0];

// Creacion de tareas por hacer
// node app crear -d "Pasear a Solovino"
// node app listar
// node app actualizar -d "Pasear a Solovino" -c true
switch(command) {
    case "crear":
        console.log("Creando una nueva tarea por hacer");
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
}

