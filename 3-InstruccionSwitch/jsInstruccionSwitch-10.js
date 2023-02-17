/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  10
*/

function mostrar()
{
	let estacionAño
	let destinoIngresado
	let mensaje

	estacionAño = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionAño) {
		case "Invierno":
		if(destinoIngresado != "Bariloche"){
			mensaje = "No se viaja";
		}else{
			mensaje = "Se viaja";
		}
			break;
		
		case "Verano":
		if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas"){
			mensaje = "Se viaja";
		}else{
			mensaje = "No se viaja";
		}
		break
		case "Primavera":
		if(destinoIngresado != "Bariloche"){
			mensaje = "Se viaja";
		}else{
			mensaje = "No se viaja";
		}
		break
	
		default:
			mensaje = "Se viaja";
			
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN