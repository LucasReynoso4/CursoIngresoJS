/*Reynoso Lucas DIV Z Grupo 1
Ejercicio ES/07
/*
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let suma

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	suma = primerNumeroIngresado + segundoNumeroIngresado;
	alert(suma)
		
}

function restar()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let resta

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resta = primerNumeroIngresado - segundoNumeroIngresado;
	alert(resta)
	
}

function multiplicar()
{ 
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let multiplicar

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	multiplicar = primerNumeroIngresado * segundoNumeroIngresado;
	alert(multiplicar)
	
}

function dividir()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let dividir

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	dividir = primerNumeroIngresado / segundoNumeroIngresado;
	alert(dividir)
	
}

