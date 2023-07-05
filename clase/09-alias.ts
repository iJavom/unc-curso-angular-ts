(()=>{
    //Un alias nos ahorra el trabajo de poner un conjunto de types cada vez que lo vayamos a declarar
    //La sintaxis es la siguiente:

    type tiposFestivos = "Navidad" | "Semana Santa" | number;

    //Declaramos de manera explicita en alguna variable
    var diaFestivo : tiposFestivos;
    var diaVacaciones : tiposFestivos;

    diaFestivo = 31;
})();