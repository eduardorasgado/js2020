const yargs = require('yargs');

const argv = yargs
    .command('crear', 'Agregar una nueva tarea', {
        descripcion: {
            demand: true,
            describe: 'Descripcion de la tarea',
            alias: 'd',
            type: 'string'
        }
    })
    .command('listar', 'Listar todas las tareas', {})
    .command('actualizar', 'Marcar una tarea', {
        numero: {
            demand: true,
            describe: 'El id del mensaje que deseas actualizar',
            alias: 'n',
            type: 'number'
        },
        descripcion: {
            demand: false,
            describe: 'Si agrega esta flag, no se actualiza el estado a TERMINADO, '+
            'solo se cambia la descripcion de una tarea ya creada. De otro modo, ocurre lo mencionado',
            alias: 'd',
            type: 'string',
            default: ''
        }
    })
    .command('reiniciar', 'Limpiar las tareas terminadas', {
        all: {
            demand: false,
            describe: 'Se eliminan todas las tareas, incluyendo las no concluidas. Nota: Solo incluya la bandera.',
            alias: 'a',
            default: false
        }
    })
    .command('borrar', 'Eliminar una tarea especifica de la lista', {
        numero: {
            demand: true,
            describe: 'El numero de la tarea a eliminar',
            alias: 'n',
            type: 'number'
        }
    }).help();

module.exports = {
    argv
};


