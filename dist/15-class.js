"use strict";
(() => {
    //Clase: Es una plantilla o molde que nos permite crear (INSTANCIAR) objetos a partir de ella donde genera sus mismos variables (ATRIBUTOS), funciones internas (METODOS) y adicional con la instanciacion se ejecuta un metodo nativo llamado CONSTRUCTOR
    class NombreClase {
        //metodos
        saludar() {
            console.log("Hola clase");
        }
        constructor(paramEdad, paramProf) {
            //atributos
            this.nombreProfesor = "";
            this.edadProfesor = paramEdad;
            this.profesion = paramProf;
        }
    }
    var profesor = new NombreClase(28, "Ingeniero Informatico");
    profesor.saludar();
})();
