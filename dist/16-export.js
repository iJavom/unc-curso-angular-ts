"use strict";
//Las exportaciones sirven para organizar mejor nuestro codigo y poder referenciarlos en otros archivos
//Simplemente anteponemos la palabra export
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor() {
        this.color = "";
        this.ruedas = 0;
    }
    arrancar() {
        console.log("rummm");
    }
}
exports.Auto = Auto;
