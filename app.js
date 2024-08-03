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
  let textoPorEncriptar = "";
  let textoEncriptado = "";
  let cadenaEncriptada = "";
  let k = 0; // Indice cadenaEncriptada.
  let llave = "";

  // Se captura el texto a encriptar en minúsculas:
  textoPorEncriptar = document.getElementById("texto_Cifrar").value.toLowerCase(); 
  // Se captura el elemento texto_Descifrar:
  textoEncriptado = document.getElementById("texto_Descifrar"); 

  if (tratarAcentos(textoPorEncriptar) || tratarEspeciales(textoPorEncriptar)) {
    alert("Recuerda no utilizar acentos o caracteres especiales!");
  } 
  
  else // Encriptación:
  {
    for (k = 0; k < textoPorEncriptar.length; k++) {
    
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

    textoEncriptado.value = cadenaEncriptada;
  }

  return;
}



function tratarAcentos(cadena) {
  flag = false; // Bandera para indicar presencia/ausencia de acentos.

  // Lista de caracteres acentuados extraida de la Tabla Unicode usando ChatGPT:
  const caracteresAcentuados = "àáâãäāăąǎǟǡǻȁȃȧǡắằẳẵặảấầẩẫậæèéêëēĕėęěȅȇėẽẹẻếềểễệìíîïĩīĭįǐȉȋỉịòóôõöōŏőǒǫǭȍȏǫồốổỗộớờởỡợùúûüũūŭůűųưǔȕȗủứừửữựỳýŷÿȳỹỵỷỷḃćĉċčçďḋḍḏđḟĝğġģĥȟḧḩḫħĵķĺļľḷḹḿṁńņňṅṇṉñṗŕŗřśŝşšṣṡṣťŧṭṯṳṽŵẁẃẅýẋźżžẓẕß";

  for (let i = 0; i < cadena.length; i++) {
    // Verificar si el carácter actual está en la lista de caracteres acentuados:
    if (caracteresAcentuados.includes(cadena[i])) {
      flag = true; // Se encontró un carácter acentuado.
      break; // Sale del for.
    } 
    else 
    {
      flag = false;
    }
  }

  return flag;
}



function tratarEspeciales(cadena) {
  flag = false; // Bandera para indicar presencia/ausencia de caracteres especiales.

  // Lista de caracteres especiales extraida de la Tabla Unicode usando ChatGPT:
  const caracteresEspeciales = ".,:;¨¡!¿?#$%&'()*+-/<=>@[]^_`'{|}~└";
  
  // Busca los caracteres especiales:
  for (let i = 0; i < cadena.length; i++) {
    // Verificar si el carácter actual está en la lista de caracteres especiales:
    if (caracteresEspeciales.includes(cadena[i])) {
      flag = true; // Se encontró un carácter especial.
      break; // Sale del for.
    } 

    else 
    {
      flag = false;
    }
  }

  // Busca comillas dobles:
  if(cadena.includes('"')){ flag = true;}

  // Busca "\":
  if(cadena.includes('\\')){ flag = true;}

  return flag;
}