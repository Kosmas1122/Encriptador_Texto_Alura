/* Llaves de encriptación a utilizar:
----------------------------------
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/* Requisitos:
----------------------------------
* Debe funcionar solo con letras minúsculas.
* No deben ser utilizados letras con acentos ni caracteres especiales.
* Debe ser posible convertir una palabra para la versión encriptada también
  devolver una palabra encriptada para su versión original.
*/

const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";



function encriptar() {
  let flagMinusculas = true;      // Bandera para indicar ausencia de letras mayúsculas.
  let flagSinAcentos = true;      // Bandera para indicar ausencia de acentos.
  let flagSinEspeciales = true;   // Bandera para indicar ausencia de caracteres especiales.

  let textoPorEncriptar = "";     // Cadena que guarda el texto ingresado por usuario. 
  let cadenaEncriptada = "";      // Cadena con el texto encriptado.
  let textoEncriptado = "";       
  
  let k = 0;                      // Indice cadenaEncriptada.
  let llave = "";                 // Guarda caracter o una llave.


  // Se captura el texto a encriptar:
  textoPorEncriptar = document.getElementById("texto_Cifrar").value; 

  // Se verifica si hay presencia/ausencia de letras mayúsculas:
  if(tratarMayusculas(textoPorEncriptar)){
    alert("¡Recuerda solo usar letras minúsculas!");
    flagMinusculas = false;
  }

  // Se verifica si hay presencia/ausencia de acentos:
  if(tratarAcentos(textoPorEncriptar)){
    alert("¡Recuerda no utilizar acentos!");
    flagSinAcentos = false;
  }

  // Se verifica si hay presencia/ausencia de caracteres especiales:
  if(tratarEspeciales(textoPorEncriptar)){
    alert("¡Recuerda no utilizar caracteres especiales!");
    flagSinEspeciales = false;
  }

  
  // Encriptación:
  if(flagMinusculas && flagSinAcentos && flagSinEspeciales){
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

    // Se captura el elemento texto_Descifrar:
    textoEncriptado = document.getElementById("texto_Descifrar"); 
    textoEncriptado.value = cadenaEncriptada;

    // Se limpia el campo de Encriptar:
    document.getElementById("texto_Cifrar").value = "";
  }

  return;
}



function tratarMayusculas(cadena){
  // La función devuelve true/false si hay presencia/ausencia de letras mayúsculas.

  // La expresión regular busca al menos una letra mayúscula en el texto:
  const regex = /[A-Z]/;
  return regex.test(cadena);
}



function tratarAcentos(cadena) {
  // La función devuelve true/false si hay presencia/ausencia de acentos.

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
