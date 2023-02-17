/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  05
*/
function mostrar()
{
	let hora
	let mensaje
	hora = document.getElementById("txtIdHora").value;

	switch (hora) {
		case "7":
		case "8":	
		case "9":
		case "10":
		case "11":
		mensaje = "es de mañana"
			break;

	
		default:
		mensaje = "Es tarde o noche"

	}

	alert (mensaje)


}//FIN DE LA FUNCIÓN