//lo que quiero hacer es que las imgs aparezcan ocultas
//primero identifico desde js los elementos que tengo dentro de un selector, hay varias formas

/*ESTO ES COMO SE HARIA EL CODIGO DE UNA MANERA TRADICIONAL EN JAVASCRIPT
//permite seleccionar los elementos en base al selector css descendiente
var imagenes=document.querySelectorAll("#carrete img"); //quiere decir que selecciona todas las imgs dentro del div con id carrete (crea un array)

for(var i=0; i<imagenes.length;i++){
	imagenes[i].style.visibility="hidden";
}
*/


//ESTE UN EJEMPLO DE LOOP AUTOMATICO QUE TIENE JQUERY Y LO DIFERENCIA DEL CODIGO JS TRADICIONAL

//COMO SE HARIA EL CODIGO DIRECTAMENTE CON JQUERY
$(document).ready(function() {
	$("#carrete img").hide().fadeIn(5000);
});

/*ESTE ES UN EJEMPLO DE FUNCION ENCADENADA QUE TIENE JQUERY Y LO DIFERENCIA DEL CODIGO JS TRADICIONAL
var anuncio=document.getElementById("anuncio");
anuncio.style.width="500px";
anuncio.style.height="500px";
//para sustituir el texto que aparece dentro del html uso innerHTML
anuncio.innerHTML="Vende!!"
*/

//ACA VA COMO SE HARIA EL CODIGO DIRECTAMENTE EN JS
$(document).ready(function() {
	$("#anuncio").width(500).height(500).text("Vende!!").hide().fadeIn(5000);
});
