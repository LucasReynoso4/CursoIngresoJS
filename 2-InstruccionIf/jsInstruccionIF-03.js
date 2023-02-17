function mostrar()
{
	let edadIngresada

	edadIngresada = document.getElementById("txtIdEdad")
	edadIngresada = parseInt(edadIngresada)

	if(edadIngresada >= 18){

		alert ("eres mayor de edad")

	}
	else(
		alert("no eres mayor de edad")
	)
}//FIN DE LA FUNCIÓN