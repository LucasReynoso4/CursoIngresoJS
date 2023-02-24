/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado
	let respuesta;
	//let promedio;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true ;

	do{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt (numeroIngresado);
		

		if(numeroIngresado > 0){

			sumaPositivos += numeroIngresado;

		}else{
		if(numeroIngresado < 0){

			multiplicacionNegativos *= numeroIngresado;
			}
		}

		respuesta = confirm("¿Desea seguir ingresando numeros?");

	}while(respuesta == true);

	//promedio = sumaPositivos / contador;
	//promedio = multiplicacionNegativos * contador;

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN