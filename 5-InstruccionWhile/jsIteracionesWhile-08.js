/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado
	let contador;
	let respuesta;
	let promedio;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true ;

	while(respuesta == true){
		numeroIngresado == prompt("Ingrese un numero: ")
		numeroIngresado = parseInt (numeroIngresado)

		sumaPositivos = contador + 1;
		multiplicacionNegativos = contador * - 1; 

		respuesta = confirm("¿Desea seguir ingresando numeros?")



	}

	promedio = sumaPositivos / contador;

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN