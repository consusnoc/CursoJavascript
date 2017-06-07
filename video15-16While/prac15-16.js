var nombre, edad, poblacion;

nombre=prompt("Introduce tu nombre por favor");

	while( !isNaN(nombre)){
		nombre=prompt("Introduce un nombre valido");
	}

edad=prompt("Introduce tu edad por favor");

	while(edad<=0 || edad>105 || isNaN(edad)){
		edad=prompt("Introduce una edad valida");
	}

poblacion=prompt("Introduce localidad");

	while(!isNaN(poblacion)){
		poblacion=prompt("Introduce una localidad valida");
	}

