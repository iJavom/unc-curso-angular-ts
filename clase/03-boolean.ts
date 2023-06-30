(()=>{
    //Tipo de datos booleanos
    
    //Declaracion explicita
    let unaVariableBooleana : boolean = true;
    unaVariableBooleana = false;
    //Para efectos de JS nosotros podemos usar estos 4 posibles valores true/false/null/undefined
    // pero en ts no, tenemos nuestra limitacion a solo dos posibles valores
    // unaVariableBooleana = null ;
    // unaVariableBooleana = undefined;
    unaVariableBooleana = isNaN(NaN);
    //console.log(unaVariableBooleana);

    //Declaracion Implicita
    let unaVariableImplicita = false;
    //Operadores booleanos 
    // && AND
    // || OR
    // ! NEGACION
    //Generalmente usados en los controles de flujo
    //if(){}
    //if(){}else{}
    //if(){}else if{}else{}
    //while(){}
    //do{}while()
    //operador tenario -> () ? :

    //Nota: () van las condiciones o la variable booleana y en {} va el codigo en caso de ser true
    // unaVariableBooleana = 5 > 10;
    // if(unaVariableBooleana){
    //     console.log('Entre en el if');
    // }else if (unaVariableBooleana || unaVariableBooleana){
    //     console.log('Entre en el if else');
    // }
    // else{
    //     console.log('Entre en el else');
    // }
    // let contador = 0;
    // while(contador < 10){
    //     console.log(contador);
    //     contador++; //<-- contador = contador +1 ; // contador += 1;
    // }
    // let unaVariableNumerica : number = 5 > 10 ? 5 : 10;
    
    // if(unaVariableBooleana){
    //     var siMeLeoAfuera;
    //     let unaVar = 5;
    // }
    // console.log(siMeLeoAfuera);
    // console.log(unaVar);
})();


//Tip para comentar rapido control + k y control + c
//Tip para descomentar rapido control + k y control + u