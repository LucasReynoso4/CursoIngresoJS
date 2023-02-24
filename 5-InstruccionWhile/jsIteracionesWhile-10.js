/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-Porcentaje de números positivos y negativos.
11-De los positivos el más grande.
12-De los negativos el más chico.
*/
function mostrar()
{ 
	let respuesta;
	let numeroIngresado;
	let acumuladorNegativos;
	let acumuladorPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let difereciaAcumuladores

	acumuladorNegativos = 0;
	acumuladorPositivos = 0
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	

	respuesta = true;
	do{
/*
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);
		while(isNaN(numeroIngresado)){
			alert("No ingreso un numero!");
		}*/

		if(numeroIngresado < 0){
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			contadorNegativos ++;

		}else{
			if(numeroIngresado > 0){
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
				contadorPositivos ++;
			}
			else{
				if(numeroIngresado == 0){
					contadorCeros ++;
				}
			}
		}
		if(numeroIngresado %2 == 0){
			contadorPares ++;
		}

		respuesta = confirm("Quiere seguir ingresando numeros?");

	}while (respuesta);

	difereciaAcumuladores = acumuladorPositivos + acumuladorNegativos;

	if(contadorPositivos== 0){
		promedioPositivos = 0;
	}else{
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}if(contadorNegativos == 0){
		promedioNegativos =0;
	}else{
		promedioNegativos = acumuladorNegativos /contadorNegativos;
	}
	
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;


		
	document.write(
	"La suma de los negativos es: " + "<br>" + acumuladorNegativos.toFixed(2) + "<br>" + 
	"La suma de positivos es: " + acumuladorPositivos.toFixed(2) + "<br>" + 
	"El contador de positivos es : " +contadorPositivos + "<br>" + 
	"El contador de negativos es: " + contadorNegativos + "<br>" + 
	"El contador de ceros es " + contadorCeros + "<br>" + 
	"El contador de pares es" + contadorPares + "<br>"+
	"El promedio de los positivos es: " + promedioPositivos.toFixed(2) + "<br>" +
	"El promedio de los negativos es" + promedioNegativos.toFixed(2) + "<br>"
	);


}