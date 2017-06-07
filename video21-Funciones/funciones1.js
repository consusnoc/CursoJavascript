//primero declaro la funcion 

function dia_de_hoy(){

	//ahora llamo al objeto date que proviene de la biblioteca de JS y sirve para manipular fechas
	var hoy=new Date();
	document.write(hoy.toDateString());
}

//luego en el html creamos una zona de script donde llamamos a la funcion, podemos hacerlo cuantas veces queramos