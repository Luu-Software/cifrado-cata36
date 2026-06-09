import { preguntar } from './lib/consola.ts';


function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  return numero / Math.pow(10, 16-tamañoPrefijo);
}


let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
let prefijo2
let prefijo1
prefijo2 = obtenerPrefijo(Number(tarjetaTexto),2)
prefijo1 = obtenerPrefijo(Number(tarjetaTexto),1)
let red: string = '';


if(prefijo2 === 34 || prefijo2 === 37){
  red = "AMEX"
} else if (prefijo1 === 4){
  red = "VISA"
} else if (prefijo2 === 51 || prefijo2 === 52 || prefijo2 === 53 || prefijo2 === 54 || prefijo2 === 55) {
  red = "MASTERCARD"
} else {
red = "DESCONOCIDO"
}


console.log(red);
