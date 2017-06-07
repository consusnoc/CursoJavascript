//errores: cuando vuelvo de una operacion x a la multiplicacion, el display vuelve a 0, no se porque

//falta:que pueda hacer operacion con nros decimales, boton para resetar

document.getElementById("display").value=0; //esto es para que por defecto me aparezca el numero cero en la pantalla de display

var cifra="";

var acumulado=0; //almacena los valores de los numeros acumulados en el display

p_operacion=true; //variable que declaro para la primer operacion

var sumar=false;
var restar=false;

//en el parametro numero se almacenan los valores numericos de cada boton, del 0 al 9
function display_numeros(numero){ 

	//Usamos POO, la jerarquia de objetos: objeto.propiedad=valor
	document.getElementById("display").value=cifra+numero;

	//para hacer que se acumulen en el display primero creo una variable vacia 
	//reasgino el valor de cifra y le digo que va a ser igual a lo que haya en el display; y el valor se almacena en esa variable
	cifra=document.getElementById("display").value;
}

function suma(){

	if (p_operacion==false){
		if(restar){
			acumulado=acumulado-parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
		else{
			//lo que hago aca es trasladar el valor de cifra y almacenarla en la variable acumulado
			acumulado=acumulado+parseInt(cifra);

			//aca hago que aparezca en el display el resultado de la suma 
			document.getElementById("display").value=acumulado;
		}
	}
	else{

		acumulado=parseInt(cifra);
		p_operacion=false;
	}

	//lo que tengo que hacer es que cuando deje de concatenar y sume el valor de la variable cifra vuelva a estar vacia
	cifra="";
	//esta funcion se vuelve V cuando aprete el boton de la suma
	sumar=true;
	restar=false;
	p_operacion=false;
}

function resta() {
	if(p_operacion==false){

		if(sumar){
			acumulado=acumulado+parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
		else{
			acumulado=acumulado-parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}

	}
	else{

		acumulado=parseInt(cifra);
		p_operacion=false;
	}

	cifra="";
	sumar=false;
	restar=true;
	multiplicar=false;
	dividir=false;
}

function multiplicacion() {
	if(p_operacion==false){

		if(sumar){
			acumulado=acumulado+parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}

		if(restar){
			acumulado=acumulado-parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
		if(multiplicar){
			acumulado=acumulado*parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}

		else{
			acumulado=acumulado*parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
	}
	else{

		acumulado=parseInt(cifra);
		p_operacion=false;
	}

	cifra="";
	sumar=false;
	restar=false;
	multiplicar=true;
	dividir=false;
}

function division() {
	if(p_operacion==false){

		if(sumar){
			acumulado=acumulado+parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}

		if(restar){
			acumulado=acumulado-parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}

		if(multiplicar){
			acumulado=acumulado*parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
		else{
			acumulado=acumulado/parseInt(cifra);
			document.getElementById("display").value=acumulado;
		}
	}
	else{

		acumulado=parseInt(cifra);
		p_operacion=false;
	}

	cifra="";
	sumar=false;
	restar=false;
	multiplicar=false;
	dividir=true;
}

function resultado() {
	if(sumar==true){ 
		// hago esto para que nos muestre en el display el resultado final de la suma, el valor de acumulado mas la cifra
		document.getElementById("display").value=acumulado+parseInt(cifra);
	}
	else if(restar){
		document.getElementById("display").value=acumulado-parseInt(cifra);
	}
	else if(multiplicar){
		document.getElementById("display").value=acumulado*parseInt(cifra);
	}
	else if(dividir){
		document.getElementById("display").value=acumulado/parseInt(cifra);
	}

	//almaceno dentro de esta variable el valor que hay en el display de la calculadora
	acumulado=parseInt(document.getElementById("display").value);
	//para poder hacer una nueva operacion necesito resetear el valor de cifra a 0
	cifra=0;
}
