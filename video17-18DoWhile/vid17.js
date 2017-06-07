
	var aleatorio=Math.round(Math.random()*100);

	var minum, intentos;

	minum=0;

	intentos=0;

	var mensaje=document.getElementById('c_mensaje');

	var intentosConsumidos=document.getElementById("c_intentos");

	do{

		minum=prompt("Introduce un nro entre 0 y 100");

		if(aleatorio>minum){
			mensaje.value="Mas alto";

			mensaje.style.fontSize="18px";
		}

		if(aleatorio<minum){
			mensaje.value="mas bajo";
			mensaje.style.fontSize="18px";
		}

		intentos++;

		intentosConsumidos.value=intentos;
		intentosConsumidos.style.fontSize="18px";
		intentosConsumidos.style.color="red";
		intentosConsumidos.style.textAlign="center";

	}while(aleatorio !=minum);

	mensaje.value="correcto!";
	mensaje.style.color="red";
