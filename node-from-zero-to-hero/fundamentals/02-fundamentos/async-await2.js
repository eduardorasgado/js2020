let { empleados, salarios } = require("./DB");

let getEmpleado = async (id) => {
    let empleado = empleados.find( e => e.id === id);
    if(!empleado) {
        throw new Error(`No se ha encontrado al empleado con id ${ id }`)
    } else {
        return empleado;
    }
};

let getSalario = async (empleado) => {
    let nomina = salarios.find( salario => empleado.id === salario.id );

    if(!nomina) {
        throw new Error(`No se ha encontrado la nómina con id: ${ empleado.id }`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: nomina.salario,
            id: empleado.id
        };
    }
};


// Usamos las funciones async pero aqui no manejamos los then y catch
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