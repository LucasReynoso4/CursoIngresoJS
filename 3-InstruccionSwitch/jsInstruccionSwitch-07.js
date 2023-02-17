/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  07
*/
function mostrar()
{
	let puntoCardinal;
	let mensaje;

	puntoCardinal = document.getElementById("txtIdDestino").value;
	
	switch (puntoCardinal) {
		case "Bariloche":
		mensaje = "Se encuentra al Oeste"
			break;
		case "Cataratas":
		mensaje = "Se encuentran al norte"
		break
		case "Ushuaia":
		mensaje = "Se encuentran en el sur"
		break
		case "Mar del plata":
		mensaje = "Se encuentran en el este"
		default:
			
	}

	alert (mensaje)


}//FIN DE LA FUNCIÓN