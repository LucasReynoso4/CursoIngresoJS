/*Reynoso Lucas DIV Z Grupo 1
Ejercicio Integrador 4

/*Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa, para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa, en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.
*/

function mostrar()
{
	let alturaIngresada;
	let edadIngresada;
	let precioMenores;
	let precioMayores;

	
	edadIngresada = parseInt(edadIngresada);

	precioMenores = 200;
	precioMayores = 400;
	alturaIngresada = prompt("Indique su estatura ");
	

	if(alturaIngresada <= 119 ){

		alert("No puede ingresar a la montaña rusa");

	}
	else{

		edadIngresada = prompt("Indique su edad ");

		if(edadIngresada <= 17 || edadIngresada >= 81 ){

			alert("Su monto a abonar es de " + precioMenores);

		}
	else{
		

			alert("Su monto a abonar es de " + precioMayores);

	}

	}

}