// se conoce como callback
setTimeout(function() {
    console.log("Hola mundo");
});

setTimeout(() => {
    console.log("Hola arrow mundo");
});

let getUsuarioById = ( id, callback ) => {

    let usuario = {
        nombre: "Eduardo",
        id
    }

    // debemos manejar el retorno de un posible error en un callback
    if(id === 20) return callback(`El usuario con el id ${id} no existe en la DB`);

    return callback(null, usuario);

};


let userIds = [10, 20, 4]

userIds.forEach((id) => {
    // mandando dos argumentos en funcion como el callback
    getUsuarioById(id, (err, usuario) => {
        if(err) return console.log(err);
        return console.log(`Usuario de base de datos es ${usuario.nombre} con el id: ${usuario.id}` );
    });
})