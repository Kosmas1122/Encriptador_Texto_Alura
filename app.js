/* 
Llaves de encriptación a utilizar:
----------------------------------

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";

function encriptar() {
  let textoPorEncriptar="";
  let textoEncriptado ="";
  let cadenaEncriptada = "";
  let k = 0; // Indice cadenaEncriptada.
  let llave = "";
  
  textoPorEncriptar = document.getElementById("texto_Cifrar").value.toLowerCase();   // Se captura el texto a encriptar en minúsculas.
  textoEncriptado = document.getElementById("texto_Descifrar");       // Se captura el elemento texto_Descifrar.
  
  //console.log(textoPorEncriptar); // Sonda OK.

  // Encriptación:
  for (k = 0; k < textoPorEncriptar.length; k++) {
    //console.log(textoPorEncriptar[k]); // Sonda OK.

    switch (textoPorEncriptar[k]) {
      case "e":
        llave = e;
        break;

      case "i":
        llave = i;
        break;

      case "a":
        llave = a;
        break;

      case "o":
        llave = o;
        break;

      case "u":
        llave = u;
        break;

      default:
        llave = textoPorEncriptar[k];
        break;
    }

    cadenaEncriptada = cadenaEncriptada + llave;
  }

  //console.log(cadenaEncriptada);  // Sonda OK.
  
  textoEncriptado.value = cadenaEncriptada;

  return;
}