const { empleados, salarios } = require("./DB");

// Promesas
let getEmpleado = (id) => {
    // se manda a llamar resolve si hay exito, de otro modo se llama a reject
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id
        });
    
        if (!empleadoDB) {
            return reject(`No existe el empleado con id ${id}`);
        }
        // resolve solo recibe un arumento
        return resolve(empleadoDB);
    });
};

// probando la promesa dentro de la arrow function previa

let empleadoIdList = [ 1, 13, 2, 6, 3, 4 ];

// Notese que el resultado de la evaluacion de la promesa en el ciclo for
// devuelve en cierto orden los resultados de las busquedas, dada la caracteristica
// Non blocking de node.
empleadoIdList.forEach( empleadoId => {
    getEmpleado(empleadoId)
        .then( empleado => {
            console.log(`Empleado de BD: ${empleado.nombre}`);
        })
        .catch( err => {
            console.log(err);
        });
});
