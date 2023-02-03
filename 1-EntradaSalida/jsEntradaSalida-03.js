/*Reynoso Lucas DIV Z Grupo 1
Ejercicio integrador 2
/*

Ejercicio integrador clase 2: se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento y el total a pagar.

*/
function mostrar()
{
	let valorIngresado
	let iva
	let ivaAgregado
	let restoCompraMayorista
	let restoCompraMayoristaAgregado
	let totalAPagar
	
	valorIngresado = document.getElementById("txtIdNombre").value;
	valorIngresado = parseInt(valorIngresado);


	/*valorIngresado = valorIngresado + ivaAgregado 
	
	totalAPagar = valorIngresado - restoCompraMayorista*/

	restoCompraMayorista = valorIngresado*5 / 100;
	
	iva = valorIngresado *21/100 ;
	
	ivaAgregado = valorIngresado + iva
	
	restoCompraMayoristaAgregado = valorIngresado - restoCompraMayorista
	
	totalAPagar = ivaAgregado - restoCompraMayorista

	alert("El importe bruto es de " + valorIngresado + " el iva es de " + iva + " el importe con iva agregado es de " + ivaAgregado + " el valor del descuento es de " + restoCompraMayorista + " el total a pagar es de " + totalAPagar)
	

}






