const fs = require('fs');

let tareasPorHacer = [];

const guardarDB = () => {
    
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error("No se pudo grabar", err);
    });
}

// TODO: Cuando no hay nada en data, presenta un error;
const cargarDB = () => {
    tareasPorHacer = require('../db/data.json');
    
}

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

const listar = () => {
    cargarDB();
    
    let tareas = 'Numero Estado    Tarea\n';

    if(tareasPorHacer.length == 0) {
        return {
            error: true,
            message: '[La Lista está vacía]',
            data: null
        };
    } else {
        tareasPorHacer.forEach(tarea => {
            tareas += `${tarea.id}       ${tarea.completado} -> ${tarea.descripcion} \n`;
        });

        return {
            error: false,
            message: 'Todas las tareas han sido recopiladas con exito.',
            data: tareas
        }
    }
}

module.exports = {
    crear,
    listar
}