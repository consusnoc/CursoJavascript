
	var Trabajadores= new Array();

	var persona="";

	var contador=0;

	while (persona!="salir"){
		persona=prompt("Introduce el nombre del trabajador");
		Trabajadores[contador]=persona;
		contador++;
	}

	Trabajadores.pop();

	//el metodo pop borra la ultima posicion del array, osea borra la palabra salir para que solo se vean los nombres 

	for(var i=0; i<Trabajadores.length; i++){
		document.write(Trabajadores[i] + "<br/>");
	}

	//este metodo nos permite escribir todos los nombres que queramos
