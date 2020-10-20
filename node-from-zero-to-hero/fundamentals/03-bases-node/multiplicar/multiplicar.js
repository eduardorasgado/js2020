const fs = require("fs");

const noBase = "No hay base o la base/limite no son/es un numero";

const createTabla = (base, limite) => {
    let data = '';
    for(let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    };
    return data;
};

const listarTabla = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject(noBase);
            return;
        }
       else  resolve(createTabla(base, limite));
    } );
};

const crearArchivo = ( base, limite = 10 ) => {
    return new Promise( ( resolve, reject ) => {
        if(!Number(base) || !Number(limite)) {
            reject(noBase);
            return;
        }
        let data = createTabla(base, limite);

        let location = `tablas/`;
        let fileName = `tabla-${base}-limite-${limite}.txt`;

        // guardando la tabla de base en el fichero del sistema
        fs.writeFile(location+fileName, data, (err) => {
            if(err) reject("No se pudo crear el archivo.");
            else resolve(fileName);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};