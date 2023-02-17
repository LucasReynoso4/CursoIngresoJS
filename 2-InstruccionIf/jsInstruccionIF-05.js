function mostrar()
{
	let edadIngresada

	edadIngresada = document.getElementById("txtIdEdad")
	edadIngresada = parseInt(edadIngresada)

	/*if(!(edadIngresada >= 13 && edadIngresada <= 17)){

		alert("No es adolescente")
	} */

	if(edadIngresada <13 || edadIngresada >17)
	{
	
		alert("No es adolescente")
	}


}//FIN DE LA FUNCIÓN