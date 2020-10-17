import { empleados, salarios } from "./DB";

let getEmpleado = (id, callback) => {
    // buscamos y obtenemos un eempleado especifico
    let empleadoDB = empleados.find( empleado => {
        return empleado.id == id;
    } );

    // es mas comun que nosotros trabajemos con la negacion
    if( !empleadoDB ) {
        return callback(`No existe un empleado con el ID ${ id }`, null);
    } 
    return callback(null, empleadoDB);
};

// si se encuentra el salario entonces 
    /**
     *  {
     *      nombre: 'Melissa',
     *      salario: 3000
     * }
     * 
     *  No se encontro un salario para el usuario USER
     */
let getSalario = (empleado, callback) => {
    let salarioEspecifico = salarios.find( salario => {
        return  salario.id === empleado.id;
    });

    if(!salarioEspecifico) {
        return callback(`No se encontro un salario para el usuario ${ empleado.nombre }`, null);
    }
    return callback(null, {
        nombre: empleado.nombre,
        salario: salarioEspecifico.salario,
        id: empleado.id
    });
}

// ------------Testing functions -------------

function callingGetSalario(empleado) {
    getSalario(empleado, (err, empleadoNomina) => {
        console.log(`[ BUSCANDO NOMINA DE EMPLEADO: ${empleado.nombre} ]`);
        if(err) {
            return console.log(err);
        } 
        console.log(`[ ***NOMINA ENCONTRADA*** ]`);
        return console.log(`NOMINA del empleado ${empleadoNomina.nombre} con salario `+
        `${empleadoNomina.salario}`);
    })
}

// usando la funcion getEmpleado para invocar callbacks
let empleadoIdList = [ 1, 13, 2, 6, 3, 4 ];

empleadoIdList.forEach((empleadoId) => {
    getEmpleado(empleadoId, (err, empleado) => {
        console.log(`[ BUSCANDO EMPLEADO: ${empleadoId}  ]`);
        if(err) {
            return console.log(err);
        } else {
            console.log(`[ ***EMPLEADO ENCONTRADO*** ]`);
            // en caso de encontrar al empleado entonces consultamos salario
            callingGetSalario(empleado)
        }
    });
    console.log("------");
});

