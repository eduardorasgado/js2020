const fs = require('fs');

let tareasPorHacer = [];

const crear = async (descripcion) => {

    if(!descripcion || descripcion == '') {
        throw new Error('No existe una descripción.')
    }

    let porHacer = {
        id: tareasPorHacer.length + 1,
        completado: false,
        descripcion,
    };
    tareasPorHacer.push(porHacer);
    return 'Se ha agregado una nueva tarea';
};

const listar = async() => {
    let tareas = 'Numero Estado    Tarea';
    if(tareasPorHacer.length == 0) throw new Error('No hay tareas por hacer');
    tareasPorHacer.forEach(tarea => {
        tareas += `${tarea.id} ${tarea.completado} -> ${tarea.descripcion} `;
    });
    return tareas;
}

module.exports = {
    crear,
    listar
}