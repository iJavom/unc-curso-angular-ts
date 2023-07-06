//Las exportaciones sirven para organizar mejor nuestro codigo y poder referenciarlos en otros archivos
//Simplemente anteponemos la palabra export

export type estacionesAnuales = "Invierno" | "Primavera" | "Verano" | "Otoño"

export interface IPerros {
    nombre: string,
    raza : string,
    edad : number
}

export class Auto{
    color: string ="";
    ruedas: number = 0;

    arrancar(){
        console.log("rummm");
    }
}