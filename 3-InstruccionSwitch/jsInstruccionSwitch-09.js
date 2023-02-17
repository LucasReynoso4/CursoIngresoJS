/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Switch  09
*/



function mostrar()
{
	let estacionAño;
	let destinoIngresado;
	let mensaje;
	let precioEstadia;
	let descuento; 
	let aumento;
	let total;

	precioEstadia = 15000;
	descuento = 1;
	aumento = 1;

	estacionAño = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	

	switch (estacionAño) {
		case "Invierno":
			if(destinoIngresado == "Bariloche"){
				aumento = precioEstadia * 0.2;
			}else{
				if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba"){
					descuento = 0.9;
				}else{
					if(destinoIngresado == "Mar del plata"){
						descuento = 0.8;
					}
				}
			}
			break
		case "Verano":
			if(destinoIngresado == "Bariloche"){
				descuento = 0.8;
			}else{
				if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba"){
					aumento = precioEstadia * 0.1;
				}else{
					if(destinoIngresado == "Mar del plata"){
						aumento = precioEstadia * 0.2;

					}
				}
			}
			break;
			case "Otoño":
			case "Primavera":
				if(destinoIngresado == "Bariloche" || destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata"){
					aumento = precioEstadia * 0.1;
				}else{
					if(destinoIngresado == "Cordoba"){
						precioEstadia;
					}
				}
			break;
	
		default:
	}


	total = precioEstadia + (precioEstadia*aumento) - (precioEstadia*descuento);

	/*if(aumento != 0){
		total = precioEstadia + total;

	}*/
	mensaje = "Su precio final es " + total ;
 alert(mensaje);

}//FIN DE LA FUNCIÓN