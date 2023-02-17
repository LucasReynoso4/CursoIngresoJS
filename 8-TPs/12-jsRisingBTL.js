/* Reynoso Lucas DIV Z Grupo 1
 Integrador (TP 12 integrador)
/*
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto
	let legajo
	let nacionalidad
	let mensaje;
 
	edadIngresada = prompt("Ingrese su edad: ");
	sexoIngresado = prompt("Ingrese su sexo: ");
	estadoCivilIngresado = prompt("Indique su estado civil: \n1.Soltero \n2.Casado \n3.Divorciado \n4.Viudo/a ");
	sueldoBruto = prompt("Indique su sueldo bruto");
	legajo = prompt("Indique su numero de legajo: ");
	nacionalidad = prompt("Indique su nacionalidad: \n A. Argentinos\n E. Extranjeros\n N. Nacionalizados ");
	
	edadIngresada = parseInt(edadIngresada);
	sueldoBruto = parseInt(sueldoBruto)
	estadoCivilIngresado = parseInt(estadoCivilIngresado)
	legajo = parseInt(legajo)

	while(isNaN(edadIngresada) || edadIngresada <18 || edadIngresada >90){
		mensaje = "Su edad es: "
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
	}

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		mensaje = "Ingrese denuevo su sexo."
		sexoIngresado = prompt("Ingrese su sexo: ");
	}
	while(estadoCivilIngresado <1 || estadoCivilIngresado >4 ){

		mensaje = "Ingrese el numero correcto: "
		estadoCivilIngresado = prompt("Indique su estado civil: \n1.Soltero \n2.Casado \n3.Divorciado \n4.Viudo/a ");
		estadoCivilIngresado = parseInt(estadoCivilIngresado)
	}
	while(isNaN(sueldoBruto) || sueldoBruto <=8000){
		mensaje = "Ingrese bien el monto."
		sueldoBruto = prompt("Indique su sueldo bruto");
		sueldoBruto = parseInt(sueldoBruto)
	}
	while(legajo<1000 || legajo > 9999){
		mensaje = "Ingrese bien su legajo "
		legajo = prompt("Indique su numero de legajo: ");
		legajo = parseInt(legajo)
		
	}
	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		mensaje = "Ingrese bien su nacionalidad"
		nacionalidad = prompt("Indique su nacionalidad: \n A. Argentinos\n E. Extranjeros\n N. Nacionalizados ");


	}

	 document.getElementById("txtIdEdad").value = edadIngresada 
	document.getElementById("txtIdSexo").value = sexoIngresado
	document.getElementById("txtIdEstadoCivil").value =estadoCivilIngresado
	document.getElementById("txtIdSueldo").value = sueldoBruto
	document.getElementById("txtIdLegajo").value = legajo
	document.getElementById("txtIdNacionalidad").value = nacionalidad





	





	alert(mensaje);
}
