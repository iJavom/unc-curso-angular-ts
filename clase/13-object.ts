(()=>{

    //Objeto: es una variable compleja que permite almacenar dentro de el mas variables. Las variables dentro de el objeto la llamaremos atributos y las funciones las llamaremos metodos

    //declaracion objeto implicita
    var unObjeto = new Object(); //Es muy raro de ver 
    unObjeto = {
        nombre : "sasha",
        edad : 7,
        raza : "husky"
    }

    //Declaracion explicita
    var objetoExplicito : object = new Object(); 

    objetoExplicito = {
        nombre : "tom",
        edad : 9,
        raza : 'mastin napolitano'
    }

    var llamarPerrito = (perrito: {nombre: string, edad: number, raza?:string }):void =>{
        console.log(perrito.nombre);
        console.log(perrito.edad);
        let raza:string;
        raza = perrito.raza ?? "desconocido"; // <-- Se pone despues del atributo que se afirma que no sera null
        // if(perrito.raza){
        //     raza = perrito.raza  
        // }else{
        //     raza ="desconocida"
        // }
        //Volvemos a las 8:15 - 20:15;
        console.log(raza);
    }

    // llamarPerrito({
    //     nombre : "sasha",
    //     edad : 7,
    //     raza : "husky"
    // });

    //Otra forma de declarar explicitamente
    var unObjetoExp : { nombre: string, edad:number, raza? :string}
    unObjetoExp = {
        nombre: "brandy",
        edad : 4,
        raza : ""
    }

    llamarPerrito(unObjetoExp);
    
})();
