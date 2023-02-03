/*Reynoso Lucas DIV Z Grupo 1
Ejercicio ES/05
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado
	let edadIngresada

	nombreIngresado= document.getElementById("txtIdNombre").value;
	edadIngresada= document.getElementById("txtIdEdad").value;
	alert("Su nombre es " + nombreIngresado + " " + "y tiene " + edadIngresada);


	
}

