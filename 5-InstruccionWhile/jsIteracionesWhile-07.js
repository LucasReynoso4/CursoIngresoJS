/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado
	var contador;
	var acumulador;
	var respuesta;
	let promedio;


	contador=0;
	acumulador=0;
	respuesta= true;

	//do
	while (respuesta == true ) {

		numeroIngresado == prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = confirm("Desea seguir ingresando numeros?");
		
	} //while (respuesta == true );

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;



}//FIN DE LA FUNCIÓN