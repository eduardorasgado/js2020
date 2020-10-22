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

module.exports = {
    crear,
    listar
}