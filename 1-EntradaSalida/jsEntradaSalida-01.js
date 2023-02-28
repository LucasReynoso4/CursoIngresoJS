/******************************************************************************
 * Apellido:Reynoso
 * Nombre:Lucas
 * Comisión: Z
 * Tutor: thiago
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/



function mostrar(){


	let edadIngresada
	let nombreIngresado;
	let tipoMascota;
	let pesoMascota;
	let diagnosticoMascota;
	let vacunaAntirrabica;
	let respuesta;

	

	pesoMascota = parseInt(pesoMascota)

	do{
		nombreIngresado = prompt("Ingrese el nombre de su mascota");
		do{
			edadIngresada = prompt("Ingrese la edad de su mascota");
			edadIngresada = parseInt(edadIngresada);

		}while(iSNaN(edadIngresada) || edadIngresada <0 || edadIngresada > 20);
		do{
			tipoMascota = prompt("Ingrese el tipo de mascota que tiene: \n A.perro \n B.gato \n C.hamster ");

		}while(tipoMascota != "perro" && tipoMascota != "gato" && tipoMascota != "hamster" );
		do{
			pesoMascota = prompt("Ingrese el peso de su mascota ");
			pesoMascota = parseFloat(pesoMascota);

		}while(iSNaN(pesoMascota) || pesoMascota < 0);
		do{
			diagnosticoMascota = prompt("Ingrese el diagonostico de su mascota: ");

			//Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, “picazon de abeja”)
		}while(diagnosticoMascota !="problemas digestivos" && diagnosticoMascota != "otitis" && diagnosticoMascota != "alergias en la piel" && diagnosticoMascota != "parasitos" && diagnosticoMascota != "picazon de abeja" );
		do{
			vacunaAntirrabica = prompt("Su mascota tiene la vacuna antirrabica? ");
		}while(vacunaAntirrabica != "si" && vacunaAntirrabica != "no");


		
		





	}while(respuesta == true);



	

	






}