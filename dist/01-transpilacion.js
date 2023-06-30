"use strict";
class HolaMundo {
    constructor() {
        this.varAtributo = "";
        this.varNumber = 0;
    }
}
(() => {
    1 > 0 ? 'hola' : 'adios';
    let variableNumerica;
    variableNumerica = 1 - 1;
    variableNumerica++;
    console.log('Hice un cambio');
})();
//Tipo de Declaraciones de variable en JS/TS
//var -> que declara de manera con un scope mucho mas amplio
//const -> se declara con un espacio especifico en la memoria y no cambia su valor
//let -> que declara un espacio en memoria dentro de un bloque de codigo , es decir al finalizar el bloque de codigo muere
//Las variables en JS pueden ser de tipo primitiva que son
// -Boolean
// -null
// -number
// -bigint
// -undefined
// -string
// -symbol
