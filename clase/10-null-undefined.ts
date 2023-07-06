(()=>{
    //Los tipos de datos Null o undefined deben ser declarados explicitamente

    var unaVarNull : null = null;
    var unaVarUndefined : undefined = undefined;

    var unObjeto: {
        nombre : string;
        edad : number | null | undefined;
    }
    = {
        nombre : "Javier Vargas",
        edad : 28
    }
    //"?" (Optional chaining), Nos va a permitir validar si nuestro atributo es null o undefined
    var edadProfesor : number = unObjeto?.edad ?? 0;
    
    //"!" (assertion operator o non-null assertion operator) Indica que nuestro atributo no va a venir null o undefined
    var edadProfesorV2 : number = unObjeto.edad! ;

    // || evalua => undefined , null , "" , 0 
    // ?? evalua => undefined , null 
})();