const fs = require('fs');

let tareasPorHacer = [];

const arranque = () => {
    fs.readFile('db/data.json', (err, data) => {
        if(err) return;
        tareasPorHacer = JSON.parse(data);
    });
}

const guardarDB = async () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo guardar la tarea en la DB: '+err.message);
        else return true;
    })
}

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
    let dbWrite = await guardarDB();
    
    return 'Se ha agregado una nueva tarea';
};

const listar = () => {
    let tareas = 'Numero Estado    Tarea';
    if(tareasPorHacer.length == 0) return 'No hay tareas por hacer';
    tareasPorHacer.forEach(tarea => {
        tareas += `${tarea.id} ${tarea.completado} -> ${tarea.descripcion} `;
    });
    return tareas;
}

module.exports = {
    arranque,
    crear,
    listar
}