let { empleados, salarios } = require("./DB");

let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
        let empleado = empleados.find( e => e.id === id);
        if(!empleado) {
            reject(`No se ha encontrado al empleado con id ${ id }`)
        } else {
            resolve(empleado);
        }
    } )
};

let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let nomina = salarios.find( salario => empleado.id === salario.id );

        if(!nomina) {
            reject(`No se ha encontrado la nómina con id: ${ empleado.id }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: nomina.salario,
                id: empleado.id
            });
        }
    });
};


let getInformation = async( id ) => {
    let empleado = await getEmpleado(id);
    let nomina = await getSalario(empleado);
    return `${nomina.nombre} tiene un salario de ${nomina.salario}`;
}

let ids = [1, 0, 4, 3, 2, 8];
ids.forEach( id => {
    getInformation(id)
    .then(response => {
        console.log(response);
    })
    .catch(e => console.log(`Error: ${ e }`));
});