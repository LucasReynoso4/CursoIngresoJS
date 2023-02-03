/*Reynoso Lucas DIV Z Grupo 1
Ejercicio ES/10
/*
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeIngresado
    let descuentoDeSueldo
    let sueldoDisminuido

    importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseInt(importeIngresado);
    
    descuentoDeSueldo = importeIngresado *25 / 100
    sueldoDisminuido = importeIngresado - descuentoDeSueldo

    document.getElementById("txtIdResultado").value = sueldoDisminuido

}
