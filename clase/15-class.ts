(()=>{

    //Clase: Es una plantilla o molde que nos permite crear (INSTANCIAR) objetos a partir de ella donde genera sus mismos variables (ATRIBUTOS), funciones internas (METODOS) y adicional con la instanciacion se ejecuta un metodo nativo llamado CONSTRUCTOR

    class NombreClase{
        //atributos
        nombreProfesor: string = "";
        edadProfesor: number;
        profesion: string;

        //metodos
        saludar() {
            console.log("Hola clase");
        }

        constructor(paramEdad: number, paramProf: string){
            this.edadProfesor = paramEdad;
            this.profesion = paramProf;
        }

    }

    var profesor : NombreClase = new NombreClase(28,"Ingeniero Informatico");

    profesor.saludar();


})();