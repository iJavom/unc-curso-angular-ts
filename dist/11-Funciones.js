"use strict";
(() => {
    //1 Forma function
    function nombreFuncion() {
        //Aqui insertamos el codigo logico a correr
    }
    //2 Forma Variable
    var unaVarFuncion = function () {
        //Aqui tambien insertamos codigo logico
    };
    //3 Forma Arrow Function (Funcion flecha)
    var unaArrowFunction = () => {
        //Aqui insertamos otro codigo
    };
    //En typescript y llamamos los parametros nosotros podemos typar esos parametros
    //type parametros
    var functionTS = (a, b) => {
        return a + b;
    };
    functionTS(2, 2);
    //Parametros opcionales
    function concatenacionTS(a, b, c) {
        return a + (b || "");
    }
    console.log(concatenacionTS("Hola", " mundo"));
    //Parametro opcional con valor predefinido
    function concatenacionTSV2(a, b = " viene vacio") {
        return a + b;
    }
    console.log(concatenacionTSV2("Hola"));
    //Typado de funciones de manera explicita
    //En caso de que la funcion no retorne nada se toma como una void
    var saludar = () => {
        console.log("Hola solo saludo");
    };
    saludar();
    //en caso de querer typar una funcion con algun typo es importante especificar el return de algun valor que sea de ese typo
    function multiplicarDosValores(a, b) {
        const resultado = a * b;
        return resultado;
    }
    ;
    multiplicarDosValores(2, 2);
})();
