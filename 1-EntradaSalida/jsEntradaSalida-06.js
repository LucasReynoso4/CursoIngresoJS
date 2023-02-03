/*Reynoso Lucas DIV Z Grupo 1
Ejercicio ES/06
/*
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let suma

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	suma = primerNumeroIngresado + segundoNumeroIngresado;

	alert("El resultado de la suma es: " + suma);

}

