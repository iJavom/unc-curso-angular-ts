//Sirve para traer codigo que se exporta desde otro archivo o ts
//La sintaxis es la siguiente

//import { >>lo que queremos importar separado por comas<<} from "rutaArchivo.ts"

import { Auto , estacionesAnuales } from "./16-export";


var nissan = new Auto();
nissan.ruedas = 4;
nissan.color = "blanco";

var estacionActual : estacionesAnuales = "Verano";

