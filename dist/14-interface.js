"use strict";
(() => {
    //Interfaces , son como contratos que nos permiten asignarle una forma a los objetos
    var perrito;
    perrito = {
        nombre: "sasha",
        edad: 7,
        raza: "husky"
    };
    var perro;
    perro = {
        nombre: "tom",
        edad: 9,
        raza: "Mastin"
    };
    //Podemos poner que un atributo sea opcional con el simbolo de "?"
    //Tambien podemos poner que un atributo sea de solo lectura (es decir una vez inicializado ya no puede cambiar)
    var unaVariableNueva;
    unaVariableNueva = {
        dueno: "Javier",
        nombre: "Sasha",
        edad: 7,
        raza: "Husky"
    };
    //unaVariableNueva.dueno =""
    //unaVariableNueva['dueno'] = ""
})();
