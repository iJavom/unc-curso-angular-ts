(()=>{
    //Es importante hacer declaracion var/let/const para poder inicializar una variable

    //Caracteristica adicional para las declaraciones...
    
    //Las declaraciones EXPLICITAS
    //Nomenclatura
    // var/const/let nombreVariable : tipoDato = valorInicial;
    let unaVariableNumerica : number = 5;

    
    //Las declaraciones IMPLICITAS
    //Nomenclatura
    // var/const/let nombreVariable = valorInicial;
    let unaVariableSinDeclararType = 10 ;
    unaVariableSinDeclararType = Math.random();
    // unaVariableSinDeclararType = "Otra vez me infiltre";

    console.log(unaVariableSinDeclararType);
    //Los number pueden ser usados para operaciones aritmeticas + / - / * / / / 
})()