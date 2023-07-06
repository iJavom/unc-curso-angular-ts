"use strict";
(() => {
    //Los tipos de datos Null o undefined deben ser declarados explicitamente
    var _a;
    var unaVarNull = null;
    var unaVarUndefined = undefined;
    var unObjeto = {
        nombre: "Javier Vargas",
        edad: 28
    };
    //"?" (Optional chaining), Nos va a permitir validar si nuestro atributo es null o undefined
    var edadProfesor = (_a = unObjeto === null || unObjeto === void 0 ? void 0 : unObjeto.edad) !== null && _a !== void 0 ? _a : 0;
    //"!" (assertion operator o non-null assertion operator) Indica que nuestro atributo no va a venir null o undefined
    var edadProfesorV2 = unObjeto.edad;
    // || evalua => undefined , null , "" , 0 
    // ?? evalua => undefined , null 
})();
