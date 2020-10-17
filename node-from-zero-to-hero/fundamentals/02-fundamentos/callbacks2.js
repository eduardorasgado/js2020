// base de datos de empleado
let empleados = [
    {
        id: 1,
        nombre: 'Eduardo'
    },
    {
        id: 2,
        nombre: 'Mariano'
    },
    {
        id: 3,
        nombre: 'Melisa'
    },
    {
        id: 4,
        nombre: 'Sebastian'
    },

];

// base de datos de salarios de los empleados
let salarios = [
    {
        id: 1,
        salario: 1000
    }, 
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 1200
    },
];

let getEmpleado = (id, callback) => {
    // buscamos y obtenemos un eempleado especifico
    let empleadoDB = empleados.find( empleado => {
        return empleado.id == id;
    } );

    console.log(empleadoDB);
};

getEmpleado(2, null);