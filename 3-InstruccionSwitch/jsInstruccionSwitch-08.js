/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  08
*/
function mostrar()
{
	let puntoCardinal;
	let mensaje;

	puntoCardinal = document.getElementById("txtIdDestino").value;

	switch (puntoCardinal) {
		case "Bariloche":
		mensaje = "Hace frio"
			break;
		case "Cataratas":
		mensaje = "Hace calor"
		break
		case "Ushuaia":
		mensaje = "Hace frio"
		break
		case "Mar del plata":
		mensaje = "Hace calor"
			
	}
	alert(mensaje)
	
}//FIN DE LA FUNCIÓN