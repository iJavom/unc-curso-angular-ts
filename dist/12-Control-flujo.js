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
    //Operador ternario
    //Sirve para hacer una validacion y retornar inmediatamente un valor
    // la condicion es lo que va antes del "?" 
    //la respuesta valida que va despues del "?" y antes del ":"
    //La negacion que va despues del ":"
    var respuesta = (nota >= 5) ? "Aprobado" : "Reprobado";
    //bucles
    //while
    //Se ejecuta siempre y cuando se cumpla la condicion;
    console.log("----- while");
    var contador = 0;
    while (contador < 10) {
        console.log(contador);
        contador++;
    }
    //do while
    //Se va a ejecutar por lo menos una vez y despues va a preguntar si se sigue ejecutando en base a la condicion
    console.log("----do while");
    contador = 0;
    do {
        console.log(contador);
        contador++;
    } while (contador < 10);
    //for
    //Un bucle que se ejecuta donde recibe 3 parametros que el primero corresponde a la primera accion que se va a realizar , el segundo es la condicion hasta donde se va ejecutar y el tercero es la accion que ejecuta al finalizar el bucle
    console.log("-----for");
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    //for .. in .. //Esto lo veremos mas adelante
    //for .. of .. //Esto tambien lo veremos mas adelante
    //Array functions (que son las funciones que trabajan con array)
    console.log("Ejemplo de array function");
    let unArrayVariable = ["a", "b", "c", "d", "e", "f"];
    unArrayVariable.forEach((elemento, indice, array) => {
        console.log(`Soy el elemento ${elemento}`);
        console.log(`Voy en la posicion ${indice}`);
        console.log(`My array es ${array}`);
    });
})();
