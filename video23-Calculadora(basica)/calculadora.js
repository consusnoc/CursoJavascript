var repetir="si";
 
//suma
function suma(num1,num2){
	alert("La suma es: "+ (num1+num2));
}

//resta
function resta(num1,num2){
	alert("La resta es: "+ (num1-num2));
}

//multiplicacion
function multiplicar(num1,num2){
	alert("La multiplicacion es: "+ (num1*num2));
}


//division
function division(num1,num2){
	alert("La division es: "+ (num1/num2));
}

//le agrego un do while para que preguntar si quiero repetir las operaciones
do{  

var operacion=prompt("¿Qué operacion deseas realizar? Escribe: sumar, restar, multiplicar o dividir");

var operador1= parseInt (prompt("introduce el primer numero"));
var operador2= parseInt (prompt("introduce el segundo numero"));

if (operacion=="sumar"){
	suma(operador1, operador2);
}
else if(operacion=="restar"){
	resta(operador1, operador2);
}
else if(operacion=="multiplicar"){
	multiplicar(operador1, operador2);
}
else if(operacion=="dividir"){
	division(operador1, operador2);
}
else{
	alert("La operacion no esta contemplada, vuelve a intentarlo");
}

repetir=prompt("¿Deseas repetir?");

}while(repetir=="si");