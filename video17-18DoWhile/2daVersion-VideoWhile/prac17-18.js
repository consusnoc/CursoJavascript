var nombre, edad, poblacion;

//nombre=prompt("Introduce tu nombre por favor");

	do{
		nombre=prompt("Introduce un nombre valido");
	}while( !isNaN(nombre));

//edad=prompt("Introduce tu edad por favor");

	do{
		edad=prompt("Introduce una edad valida");
	}while(edad<=0 || edad>105 || isNaN(edad));

//poblacion=prompt("Introduce localidad");

	do{
		poblacion=prompt("Introduce una localidad valida");
	}while(!isNaN(poblacion));

