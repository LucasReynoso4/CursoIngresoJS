/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  04
*/
function mostrar()
{
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "febrero":
			mensaje = "tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tiene 30 dias";
			break
	
		default:
			mensaje = "tienen 31 dias";
	}

	alert (mensaje);
}//FIN DE LA FUNCIÓN