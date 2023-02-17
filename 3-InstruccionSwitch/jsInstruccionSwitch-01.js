/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  01
*/
function mostrar()
{
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (key) {
		case "Enero":
		mensaje = "que comiences bien el año!!";
		break;

		case "Marzo":
		mensaje = "a clases!";
		break;

		case "Julio":
		mensaje = "se vienen las vacaciones!";
		break;

		case "Diciembre":
		mensaje = "Felices fiestas";
		break;


		default:
		mensaje = "No hay evenetos";
			
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN