// Creando objetos usando prototipos
let deadpool = {
    heroe: 'Deadpool',
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getIntro: function() {
        return `Heroe: ${this.heroe}, su poder es ${this.poder}, en la vida real es `
        + `${this.nombre} ${this.apellido}`;
    }
};

console.log(deadpool.getIntro());

// Lo siguiente...
let _nombre = deadpool.nombre;
let _apellido = deadpool.apellido;
let _poder = deadpool.poder;

console.log(_nombre, _apellido, _poder);

// Es lo mismo que:...
// para desestructurar necesitamos usar los mismos nombre de variables que los
// atributos del objeto en cuestion
let { heroe: superhero, nombre, apellido } = deadpool;
console.log(superhero, nombre, apellido);