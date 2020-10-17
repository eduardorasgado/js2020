/**
 * 
 * Asyn Await
 */

/**
 * Async await se invoca con la palabra clave async, esto hace que la funcion 
 * devuelva una promise
*/
//let getNombre =  async (nombre) => {
//   if(!nombre) throw new Error("No existe el nombre");
//   return nombre.toUpperCase();
//}

let getNombre = (nombre) => {
   return new Promise( (resolve, reject) => {
       if(!nombre) {
           reject("No existe el nombre");
       } else {
           resolve(nombre.toUpperCase());
       }
   } );
};

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


 // Trabajando con el await
 let saludo = async (nombre) => {

     let nombreDB = await getNombre(nombre);
     return `Hola mundo ${nombreDB}`;
 };

 saludo("Jerry")
 .then((s) => {
     console.log(s);
 })
 .catch( e => {
     console.log("Error de conexion a la DB", e);
 });


 // testeando la funcion de tipo async await
 saludo(null)
 .then((s) => {
     console.log(s);
 })
 .catch( e => {
     console.log("Error de conexion a la DB", e);
 });