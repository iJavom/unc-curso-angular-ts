"use strict";
(() => {
    //If se ejecuta si cumple una condicion
    var a = 5;
    if (a > 2) {
        console.log("Me ejecute porque cumplo la condicion");
    }
    if (a == 3)
        console.log("Entro en la priemra la linea"); //Esta linea no se ejecuta porque forma parte del if
    console.log("tengo una segunda linea"); //Como no se especificaron las llaves este console log queda por fuera del if
    //If/else
    var unaVar = "Hola";
    if (unaVar == "adios") {
        console.log("No entro aca porque no cumplo la condicion");
    }
    else {
        console.log("Como no se cumplio la condicion entre aqui");
    }
    //if/else if / else
    if (unaVar == "X") {
        console.log("Puedo ejecutarme si cumplo esta condicion");
    }
    else if (unaVar == "Hola") {
        console.log("Si cumplo la condicion entro aca");
    } //Podemos agregar tantos else if como se deseen
    else {
        console.log("Si no cumpli ninguna condicion entro aca");
    }
    //Switch case
    console.log("-----Ejemplo switch case");
    var nota = 9;
    switch (nota) {
        case 10:
            console.log("perfecto");
            break;
        case 9:
        case 8:
        case 7:
            console.log("Buena nota");
            break;
        case 6:
        case 5:
            console.log("Aprobado");
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprobado");
            break;
        default:
            console.log("Nota erronea");
            break;
    }
})();
