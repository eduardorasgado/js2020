function sumar(a, b) {
    return a + b;
}

// arrow functions o funciones de tipo flecha
const sumarFlecha = (a, b) => a + b;

function saludar() {
    return "Hola mundo";
}

const saludarFlecha = () => "Hola mundo";

console.log(sumarFlecha(40, 20));
console.log(saludarFlecha());

let deadpool = {
    heroe: 'Deadpool',
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // no puede usar arrow function porque hace uso de la key this,  que no 
    // puede ser usada en los arrow function
    getIntro: function(){
        return `Heroe: ${this.heroe}, su poder es ${this.poder}, en la vida real es `
        + `${this.nombre} ${this.apellido}`;
    },
    getMotivation: () => {
        return "Oh common buddy, whatever happens happens"
    }
};

console.log(deadpool.getIntro(), deadpool.getMotivation());
