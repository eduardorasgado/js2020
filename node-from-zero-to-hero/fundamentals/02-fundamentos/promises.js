const { empleados, salarios } = require("./DB");

// Promesas
let getEmpleado = (id) => {
    // se manda a llamar resolve si hay exito, de otro modo se llama a reject
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id
        });
    
        if (!empleadoDB) {
            reject(`No existe el empleado con id ${id}`);
        }
        // resolve solo recibe un arumento
        resolve(empleadoDB);
    });
};

let getSalario = ( empleado ) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( (salario) => salario.id === empleado.id);

        if(!salarioDB) {
            reject(`No existe el salario para el empleado ${ empleado.id }`);
        }
        resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    } );
}

// probando la promesa dentro de la arrow function previa

let empleadoIdList = [ 1, 13, 2, 6, 3, 4 ];

// Notese que el resultado de la evaluacion de la promesa en el ciclo for
// devuelve en cierto orden los resultados de las busquedas, dada la caracteristica
// Non blocking de node.
empleadoIdList.forEach( empleadoId => {
    getEmpleado(empleadoId)
        .then( empleado => {
            console.log(`Empleado de BD: ${empleado.nombre}`);
            
            getSalario(empleado)
            .then((nomina) => {
                console.log(nomina);
            })
            .catch( err => {
                console.log("[Error de NOMINA ]");
                console.log(err);
            })
        })
        .catch( err => {
            console.log(err);
        })
});
