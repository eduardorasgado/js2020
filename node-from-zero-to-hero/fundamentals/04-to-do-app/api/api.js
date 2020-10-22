const fs = require('fs');

let tareasPorHacer = [];

/**
 * Guardar una nueva tarea en la db
 */
const guardarDB = () => {
    
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error("No se pudo grabar", err.message);
    });
}

/**
 * Cargando los archivos de la db
 * Si no hay, no carga nada
 */
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch(error) {
        return;
    }
    
}

/**
 * Agrega una nueva tarea a la db sin borrar los elementos previamente guardados
 * @param descripcion La descripcion de la tarea a guardar, 
 */
const crear = (descripcion) => {

    cargarDB();

    if(!descripcion || descripcion == '') {
        return {
            error: true,
            message: 'No existe una descripción.',
            data: null
        };
    }

    let porHacer = {
        id: tareasPorHacer.length + 1,
        completado: false,
        descripcion,
    };
    tareasPorHacer.push(porHacer);

    guardarDB();
    return {
        error: false,
        message: 'La tarea se ha guardado con exito',
        data: porHacer
    };
};

/**
 * Cargar las tareas de la db y devuelve un string con una lista de estas para imprimir
 */
const listar = () => {
    cargarDB();

    if(tareasPorHacer.length == 0) {
        return {
            error: true,
            message: '[La Lista está vacía]',
            data: null
        };
    } else {
        return {
            error: false,
            message: 'Todas las tareas han sido recopiladas con exito.',
            data: tareasPorHacer
        }
    }
}

/**
 * Actualiza el estado de una tarea especifica o solo actualiza su contenido
 * @param {*} id 
 * @param {*} descripcion 
 */
const actualizarElemento = (id, descripcion) => {
    cargarDB();
    let message = '';
    let tarea = {};
    let isNotUpdated = tareasPorHacer.every( tarea => {
        if(id === tarea.id) {
            // caso: solo actualizar el estado a completado
            if(descripcion === '') {
                if(tarea.completado) {
                    // se intenta actualizar una tarea finalizada
                    return false;
                }
                tarea.completado = true;
                message = 'La tarea ha sido completada. Puedes reiniciar para eliminar este elemento';
            } else {
                // caso: actualizar solamente la descripcion de la tarea
                tarea.descripcion = descripcion;
                message = 'La descripcion de la tarea ha sido actualizada';
            }
            guardarDB();
            return false;
        } 
        return true;
    })
    
    if(!isNotUpdated) {
        // manejo de la sobreescritura de la tarea anteriormente actualizada
        if(message === '') {
            return {
                error: true,
                message: 'La tarea no se actualizo porque ya esta finalizada',
                data: null
            }
        } else {
            return {
                error: false,
                message,
                data: tarea
            }
        }
    } 
    return {
        error: true,
        message: 'La tarea no pudo ser actualizada, No existe el id en la lista.',
        data: null
    }
}

module.exports = {
    crear,
    listar,
    actualizarElemento
}