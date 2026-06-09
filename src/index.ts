import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';


let palabra: string = preguntar("Ingresa una palabra:");
let claveTexto: string = preguntar('Ingresa la clave:'); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar('¿Que queres hacer? (cifrar/descifrar)'); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)


let resultado: string = '';




if (accion === "cifrar"){
    resultado = cifrar(palabra,Number(claveTexto));
}
else if(accion === "descifrar"){
resultado = descifrar(palabra,Number(claveTexto));


}






console.log(resultado);


