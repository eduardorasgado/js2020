const api = require('./api/api');
const { argv } = require('./config/yargs');


if(argv.argv._[0] == undefined) {
    console.log('[Introduzca un comando]');
    argv.showHelp();
    return;
}
let command = argv.argv._[0];
console.log(argv.argv);
// Creacion de tareas por hacer
// node app crear -d "Pasear a Solovino"
// node app listar
// node app actualizar -d "Pasear a Solovino" -c true
let response;
switch(command) {
    case "crear":
        response = api.crear(argv.argv.descripcion);
        if(response.error) {
            console.error(response.message);
        } else {
            console.info(response.message)
        }
        
        break;
    case "listar":
        console.log('[TODAS LAS TAREAS]');
        response = api.listar();
        if(response.error) {
            console.error(response.message);
        } else {
            console.log("\n=======TAREAS POR HACER=======");
            console.log('Numero Estado    Tarea\n');
            let estadoTarea = '';
            for(let tarea of response.data) {
                estadoTarea = tarea.completado ? 'Finalizada' : 'Pendiente';
                console.log(`${tarea.id}       ${estadoTarea} -> ${tarea.descripcion} \n`);
                console.log("----------------------------------------------");
            }
        }
        break;
    case "actualizar":
        console.log("[ACTUALIZANDO UNA TAREA]");
        response = api.actualizarElemento(argv.argv.numero, argv.argv.descripcion)
        if(response.error) {
            console.error(response.message);
        } else { 
            console.info(response.message);
        }
        break;
    case "reiniciar":
        console.log("Reinicia la lista, pero deja las tareas que no se han hecho");
        break;
    default:
        console.log("Comando Invalido");
};