const argvModule = require('yargs');

const baseObj = {
    demand: true,
    describe: "La base de la tabla que deseas obtener e.g: --base=9",
    alias:'b',
    type: 'number'
};

const limiteObj = {
    demand: false,
    describe: "Limite superior de la tabla requerida, e.g: --limite=5",
    alias: 'l',
    default: 10,
    type: 'number'
};

const requirements = {
    base: baseObj,
    limite: limiteObj
};
// para conseguir los argumentos de manera ordenada con ayuda de yargs
// Configuando los comandos de ayuda para la consola
argvModule
    .command('listar', 'Imprime en consola la tabla de multiplicar', 
    requirements)
    .command('crear', 'Guarda la tabla de multiplicar en un archivo permanente', 
    requirements);

module.exports = {
    argvModule
}