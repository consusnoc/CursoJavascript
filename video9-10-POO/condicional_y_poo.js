var cuerpo=document.getElementById("cuerpo");
var colorWeb=prompt("Introduce el color de fondo: Azul/Verde/Rojo") .toLowerCase();

/*

FORMA MAS LARGA DE RESOLVERLO

if(colorWeb=="azul"){
	cuerpo.style.backgroundColor="blue";
}

else if(colorWeb=="rojo"){
	cuerpo.style.backgroundColor="red";
}

else if(colorWeb=="verde"){
	cuerpo.style.backgroundColor="green";
}

else{
	alert("Ese color no esta contemplado");
}*/

if(colorWeb!="azul" && colorWeb!="verde" && colorWeb!="rojo"){
	alert("Ese color no esta contemplado");
}

else if(colorWeb=="azul"){
	cuerpo.style.backgroundColor="blue";
}

else if(colorWeb=="verde"){
	cuerpo.style.backgroundColor="green";
}

else{
	cuerpo.style.backgroundColor="red";
}