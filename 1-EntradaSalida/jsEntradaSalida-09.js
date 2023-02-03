/*Reynoso Lucas DIV Z Grupo 1
Ejercicio ES/09
/*
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	let importeIngresado;
	let aumentoDeSueldo;
	let sueldoAumentado;

	importeIngresado = document.getElementById("txtIdSueldo").value;
	importeIngresado = parseInt(importeIngresado);
	

	aumentoDeSueldo = importeIngresado * 10 / 100;
	sueldoAumentado = importeIngresado + aumentoDeSueldo;
	
	document.getElementById("txtIdResultado").value = sueldoAumentado
	
}
