"use strict";
(() => {
    // Declaracion implicita
    var listaDeNumeros = [1, 2, 3, 4, 5];
    // listaDeNumeros = [1,2,3,4,5, "Yo tambien quiero entrar"]; // No se pueden agregar variables de otro tipo puesto que ya se declaro como un listado numerico
    // Declaracion explicita
    //Forma 1
    var listaDePaises = ["Argentica", "Chile", "Colombia", "Venezuela"];
    //Forma 2 
    var formaDePaisesV2 = ["Argentica", "Chile", "Colombia", "Venezuela"];
    //Forma 1
    var matrizV1 = [
        [true, false],
        [true, true],
        [false, false] // 2
    ];
    matrizV1[1][0];
    //forma 2
    var matrizV2 = [
        [true, false],
        [true, true],
        [false, false] // 2
    ];
    //Forma implicita de varios elementos (que se explica mas detalladamente adelante)
    var ejemTupla = [1, "Colombia", true];
    ejemTupla = [1, "Colombia", "Otro pais"];
    //Forma explicita 
    var ejemTuplaEx = [1, "colombia"];
    ejemTupla.map((elemento, indice, array) => elemento + "soy concatenacion");
    ejemTupla.map((elemento) => {
        return elemento + "soy concatenacion";
    });
})();
