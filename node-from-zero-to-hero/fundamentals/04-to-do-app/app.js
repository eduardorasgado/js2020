const argv = require('yargs').argv;

console.log(argv);

let command = argv._[0];
console.log(command);

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
    default:
        console.log("Comando Invalido");
}

// Creacion de tareas por hacer
// node app crear -d "Pasear a Solovino"
// node app listar
// node app actualizar -d "Pasear a Solovino" -c true