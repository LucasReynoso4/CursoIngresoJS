/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	numeroMaximo = -1000;
	numeroMinimo = 1000;
	
	
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';


	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero") {

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado
			banderaDelPrimero = "no es el primero";
			
		}



		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;

		}else{
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN