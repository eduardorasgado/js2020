const fs = require("fs");

const crearArchivo = ( base, limite ) => {
    return new Promise( ( resolve, reject ) => {
        let data = '';

        for(let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };


        let location = `tablas/`;
        let fileName = `tabla-${base}.txt`;

        // guardando la tabla de base en el fichero del sistema
        fs.writeFile(location+fileName, data, (err) => {
            if(err) reject("No se pudo crear el archivo.");
            else resolve(fileName);
        });
    });
}

module.exports = {
    crearArchivo
}