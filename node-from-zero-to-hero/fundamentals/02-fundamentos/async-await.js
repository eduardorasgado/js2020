/**
 * 
 * Asyn Await
 */

 /**
  * Async await se invoca con la palabra clave async, esto hace que la funcion 
  * devuelva una promise
  */
 let getNombre = async (nombre) => {
    if(!nombre) throw new Error("No existe el nombre");
    return nombre.toUpperCase();
 }

let nombres = ['Eduardo', 'Pedro', 'Mariano', null];


 nombres.forEach( nombre => {
    getNombre(nombre)
    .then(n => {
        console.log(n);
    })
    .catch( e => {
        console.log(`Error de ASYNC: ${e}`);
    });
 });