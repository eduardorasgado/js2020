const { time, log } = require("console");
const fs = require("fs");


let base = 9;
let data = '';

for(let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
};

let location = `tablas/`;
let fileName = `tabla-${base}.txt`;

// guardando la tabla de base en el fichero del sistema
fs.writeFile(location+fileName, data, (err) => {
    if(err) throw new Error("No se pudo crear el archivo.");
    console.log(`El archivo ${fileName} ha sido creado y guardado`);
});