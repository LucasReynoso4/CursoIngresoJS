/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  03
*/
function mostrar()
{
	let mes
	let mensaje
	mes = document.getElementById("txtIdMes");


	switch (key) {
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias"
			break;
	
		default:
			mensaje = "Este mes tiene 30 o mas dias";


	}
	alert(mensaje)
}//FIN DE LA FUNCIÓN