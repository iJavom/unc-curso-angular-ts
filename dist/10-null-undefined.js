"use strict";
(() => {
    //Los tipos de datos Null o undefined deben ser declarados explicitamente
    var unaVarNull = null;
    var unaVarUndefined = undefined;
    var unObjeto = {
        nombre: "Javier Vargas",
        edad: 28
    };
    //"?" (Optional chaining), Nos va a permitir validar si nuestro atributo es null o undefined
    var edadProfesor = (unObjeto === null || unObjeto === void 0 ? void 0 : unObjeto.edad) || 0;
    //"!" Indica que nuestro atributo no va a venir null o undefined
    var edadProfesorV2 = unObjeto.edad || 0;
})();
