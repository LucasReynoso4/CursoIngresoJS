function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio

	contador=0;
	acumulador=0;

	while(contador < 5){
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador+numeroIngresado;

		contador = contador + 1;
	 }

	 promedio = acumulador / contador //5

	 document.getElementById("txtIdSuma").value = acumulador
	 document.getElementById("txtIdPromedio").value =promedio
	
	
}//FIN DE LA FUNCIÓN