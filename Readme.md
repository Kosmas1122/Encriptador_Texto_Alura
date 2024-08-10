# 1. Encriptador de Texto

## 2. Índice de Contenidos
[3. Descripción](#3-descripción)  
[4. Instalación](#4-instalación)  
[5. Uso](#5-uso)  
[6. Solución mensaje secreto](#6-solución-al-mensaje-secreto)  
[7. Autor](#7-autor)  
[8. Créditos](#8-créditos)  




## 3. Descripción
<p style="text-align: justify;"> 
Proyecto final para aplicar al programa ONE (Oracle Next Education) del grupo 7.  
Con este desafío se busca poner a prueba y afianzar los conocimientos, aplicar lo aprendido y fortalecer nuestras habilidades de programación.  
El encriptador de texto permite codificar y descodificar texto según las siguientes llaves:
</p>

La letra "e" es convertida para "enter"  
La letra "i" es convertida para "imes"  
La letra "a" es convertida para "ai"  
La letra "o" es convertida para "ober"  
La letra "u" es convertida para "ufat"  

[Volver al inicio](#1-encriptador-de-texto)


## 4. Instalación
Clonar repositorio y abrir archivo **index.html** en un navegador web.   

[Volver al inicio](#1-encriptador-de-texto)


## 5. Uso
<p style="text-align: justify;"> 
La interfaz del Encriptador de texto consta de dos áreas muy bien definidas (texto de entrada y texto de salida). En el área de entrada se ingresa el texto a encriptar o desencriptar. Se dispone entonces de dos botones en la parte inferior (<b>Encriptar</b> y <b>Desencriptar</b>) que permiten escoger la operación a realizar. El resultado aparecerá en el área de salida.  
Se tiene también un botón <b>Copiar en Input</b> que permite copiar y pegar (en un solo paso) en el área de entrada el contenido que se tiene en el área de salida.  
</p>  
 
![Pantalla Ppal](./images/Pantalla%20Principal%20Encriptador.jpg)

El algoritmo **no admite** :  
* Caracteres en mayúsculas.
* Caracteres especiales (como !, #, $, ?, etc)
* Acentos (Ejemplo: Acción --> accion) 

**Nota:**  
Dentro de los caracteres especiales se incluyeron signos de puntuación como son . , : ;

[Volver al inicio](#1-encriptador-de-texto)  

## 6. Solución al mensaje secreto
Entre los desafios finales del curso se solicitó descifrar el siguiente mensaje:  
> fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!  

Usando el encriptador tenemos:  

![Entrada mensaje secreto](./images/Solución%20Mensaje%20Secreto_Entrada.jpg)

Al presionar el botón **Desencriptar** se obtiene el mensaje secreto:  

![Salida mensaje secreto](./images/Solución%20Mensaje%20Secreto_Salida.jpg)  

El mensaje:  
> felicidades por enfrentar este desafio y haberlo concluido con exito  

[Volver al inicio](#1-encriptador-de-texto)

## 7. Autor
**David Barrios Escobar**  
Medellín, Colombia.   
<a href="http://www.linkedin.com/in/david-barrios-escobar-fust-meceng" target="_blank">LinkedIn</a>

[Volver al inicio](#1-encriptador-de-texto)  


## 8. Créditos
<p style="text-align: justify;">Este proyecto ha sido posible gracias a las enseñanzas y los recursos proporcionados por diversas personas y herramientas. Quiero expresar mi más sincero agradecimiento a: </p>

### **Profesores:**  

*En el área de programación:*  

* Christian Velasco  
* Leonardo Jose Castillo Lacruz  
* Barbara Santos  
* Jeanmarie Quijada  
* Ellen Pimentel  

*En el área de desarrollo personal:*  
* Gabriela Aguiar
* Priscila Stuani  

### **ChatGPT:** 
<p style="text-align: justify;"> 
De OpenAI por su asistencia en la generación de ideas, redacción de documentación y resolución de problemas técnicos durante el desarrollo. Herramienta clave para depurar código, aclarar conceptos, y generar ejemplos útiles.  

<a href="https://chatgpt.com/" target="_blank">Ir a ChatGPT</a> 
</p> 

### **Libros y recursos de aprendizaje:**
* <a href="https://www.amazon.com/-/es/Jon-Duckett/dp/1118008189/ref=sr_1_1?crid=1OXQWZ0ZEJLBG&dib=eyJ2IjoiMSJ9.kfJtBkc0LXPncp07HW7IsJt6WEruIbkbSTO-TF7PT74aoa21QxKyThuoClkElBEzn6ZHwEh4x1uurhDrx5ijPmDSUJovShC30PyThrp_TJ2geG5BtwD6EXq2VQYj0TNS030-ytA3q9SgFKK_XkH8WnAC5Osfap1oe3UmKjiR_MQg0s30ZzsMPWGs8yeEfScGVvz1XQ1CTXHMuBsJS7C0JQElULQtW061azbBqPRJB1Y.eCKR0yi2jv1mtYw5ztO776P7J-gVEwzm0GO-fp6xiMw&dib_tag=se&keywords=html+%26+css+design+and+build+websites%2C+jon+duckett&qid=1723299065&sprefix=%2Caps%2C218&sr=8-1" target="_blank"> HTML & CSS design and build websites, Jon Duckett. </a>  

* <a href="https://www.amazon.com/-/es/Jon-Duckett/dp/1118531647/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LQD3WM16YERT&dib=eyJ2IjoiMSJ9.xGQThA1Gc1FHfA6_fUhQzoJX9C71-GcBkZVk18ugY5AgYR79vP5Zh3HnHo_mVV0-5gfbOqkhZzQ6xnAsfU9p-uQthB7pqxbxMWQhGZq-EG2-ZLzkcz5ckMaDZ8k3Lk1d8yhn9uPPPty-ok62LGXHmgUBni8wLr_09EhyXA8KjaFdwG2XdQYaYnfvJ4NZlrbGTmyykLB_I9DElh6KN_cULA.1WWOR7715EGkSD-YeERQ-uCCguOP0EIhbK3wWL4KxDc&dib_tag=se&keywords=Javascript+and+JQuery+Interactive+Front-End+Web+Development%2C+Jon+Duckett.&qid=1723299120&sprefix=javascript+and+jquery+interactive+front-end+web+development%2C+jon+duckett.%2Caps%2C388&sr=8-1" target="_blank"> Javascript and JQuery Interactive Front-End Web Development, Jon Duckett. </a>

* <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank"> MDN Web Docs </a>

* <a href="https://www.w3schools.com/" target="_blank"> w3schools </a>

> [!Note]
> Los dos libros anteriores, aunque son ediciones muy viejas, no dejan de ser libros de referencia valiosos por su presentación gráfica y didáctica. 

[Volver al inicio](#1-encriptador-de-texto)