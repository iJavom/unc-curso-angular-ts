(()=>{

    //Interfaces , son como contratos que nos permiten asignarle una forma a los objetos

    //Anteriormente usabamos type
    type objetoEjemplo = {
        nombre: string;
        edad : number;
        raza:string;
    } | "una frase";

    var perrito : objetoEjemplo;

    perrito = {
        nombre: "sasha",
        edad: 7,
        raza :"husky"
    }

    //con interfaz se hace asi
    interface IObjetoEjemplo {
        nombre: string;
        edad: number;
        raza: string;
    }

    var perro: IObjetoEjemplo;

    perro = {
        nombre:"tom",
        edad: 9,
        raza:"Mastin"
    }

    //extends : es una capacidad que tiene las interfaces para heredar de otra interfaz
    interface IObjetoQueHerada extends IObjetoEjemplo {
        readonly dueno? : string ;
    }

    //Podemos poner que un atributo sea opcional con el simbolo de "?"
    //Tambien podemos poner que un atributo sea de solo lectura (es decir una vez inicializado ya no puede cambiar)
    var unaVariableNueva : IObjetoQueHerada;
    unaVariableNueva= {
        dueno : "Javier",
        nombre : "Sasha",
        edad: 7,
        raza: "Husky"
    }

    //unaVariableNueva.dueno =""
    //unaVariableNueva['dueno'] = ""
})();