/******************************************************************************
 * Apellido: Reynoso
 * Nombre: Lucas
 * Comisión: Z
 * Tutor: Thiago
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad : "Argentino" , "China" e "Inglaterra".
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.



*******************************************************************************/

function mostrar() {
	let nombreIngresado;
	let nacionalidad;
	let posicionJugador;
	let cantidadTarjetasRojas;
	let goles;
	let respuesta;
	let cantidadGolesHechos;
	let banderaGoleador;
	let goleadorTorneo;
	let minimoGoles;
	let cantidadMenorTarjetasRojas;
	let banderaTarjetas;
	let argentinoMenosRojas;
	let jugadoresIngleses;
	let porcentajeIngleses;
	let cantidadTotalJugadores;
  
	banderaTarjetas = true;
	banderaGoleador = true;
	goles = 0;
	cantidadTarjetasRojas = 0;
	jugadoresIngleses = 0;
	cantidadTotalJugadores = 0;
	
	do {
	  nombreIngresado = prompt("Ingrese su nombre");
	  do {
		nacionalidad = prompt(
		  "Ingrese su nacionalidad: \n argentino \n chino  ingles "
		);
	  } while (
		nacionalidad != "argentino" &&
		nacionalidad != "chino" &&
		nacionalidad != "ingles"
	  );
	  do {
		posicionJugador = prompt(
		  "Ingrese su posicion \n A.Arquero \n B.Defensor \n C.Mediocampista \n D.Delantero"
		);
	  } while (
		posicionJugador != "arquero" &&
		posicionJugador != "defensor" &&
		posicionJugador != "mediocampista" &&
		posicionJugador != "delantero"
	  );
	  do {
		cantidadTarjetasRojas = prompt(
		  "Ingrese la cantidad de tarjetas rojas recibidas."
		);
		cantidadTarjetasRojas = parseInt(cantidadTarjetasRojas);
	  } while (isNaN(cantidadTarjetasRojas) || cantidadTarjetasRojas < 0);
	  do {
		goles = prompt("Ingrese la cantidad de goles anotados.");
		goles = parseInt(goles);
	  } while (isNaN(goles) || goles < 0);
  
	  respuesta = confirm("Desea seguir ingresando jugadores?");
	  if (banderaGoleador == true) {
		goleadorTorneo = nombreIngresado;
		cantidadGolesHechos = goles;
		banderaGoleador = false;
	  } else {
		if (goles > cantidadGolesHechos) {
		  goleadorTorneo = nombreIngresado;
		  cantidadGolesHechos = goles;
		} else {
		  if (goles < minimoGoles) {
			goleadorTorneo = nombreIngresado;
			cantidadGolesHechos = goles;
		  }
		}
	  }
	  switch (nacionalidad) {
		case "argentino":
		  if (
			(nacionalidad == "argentino" &&
			  cantidadTarjetasRojas < cantidadMenorTarjetasRojas) ||
			banderaTarjetas == true
		  ) {
			argentinoMenosRojas = nombreIngresado;
			cantidadMenorTarjetasRojas = cantidadMenorTarjetasRojas;
			banderaTarjetas = false;
		  }
		  break;
  
		default:
		  if (nacionalidad == "ingles") {
			jugadoresIngleses++;
		  }
  
		  cantidadTotalJugadores++;
	  }
	} while (respuesta == true);
  
	document.write("El goleador del torneo es: " + goleadorTorneo);
  
	if (cantidadMenorTarjetasRojas) {
	  document.write(
		"El jugador argentino con menos tarjetas rojas recibidas es: " +
		  argentinoMenosRojas
	  );
	}
  
	if (jugadoresIngleses) {
	  porcentajeIngleses = (jugadoresIngleses / cantidadTotalJugadores) * 100;
	  document.write(
		"El porcentaje de jugadores ingleses de la liga es de: " +
		  porcentajeIngleses
	  );
	}
  }
  /*function mostrar() {
	let nombre;
	let nacionalidad;
	let posicion;
	let cantidadTarjetasRojasRecibidas;
	let golesJugador;
	let seguir;
	let banderaGoleador;
	let jugadorMasGoleador;
	let cantidadGolesHechosPorGoleador;
	let cantidadMenosTarjetasRojas;
	let banderaTarjetasRojas;
	let jugadorArgentinoConMenosTarjetasRojas;
	let cantidadTotalJugadores;
	let cantidadJugadoresIngleses;
	let porcentajeJugadoresIngleses;
 
	banderaTarjetasRojas = true;
	banderaGoleador = true;
	cantidadJugadoresIngleses = 0;
	cantidadMenosTarjetasRojas = 0;
	cantidadTotalJugadores = 0;
	cantidadTarjetasRojasRecibidas = 0;
	golesJugador = 0;
	cantidadGolesHechosPorGoleador = 0;
 
	do {
		nombre = prompt("Nombre del jugador: ");
		nacionalidad = prompt("Ingrese la nacionalidad del jugador");
 
		do {
			posicion = prompt("Ingresar posicion del jugador\narquero\ndefensor\nmediocampista\ndelantero");
		} while (posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero");
 
		do {
			cantidadTarjetasRojasRecibidas = prompt("Ingrese la cantidad de tarjetas rojas recibidas");
			cantidadTarjetasRojasRecibidas = parseInt(cantidadTarjetasRojasRecibidas);
		} while (isNaN(cantidadTarjetasRojasRecibidas) || cantidadTarjetasRojasRecibidas < 0);
 
		do {
			golesJugador = prompt("Ingresar la cantidad de goles del jugador");
			golesJugador = parseInt(golesJugador);
		} while (isNaN(golesJugador) || golesJugador < 0);
 
		if(golesJugador > cantidadGolesHechosPorGoleador || banderaGoleador == true){
			jugadorMasGoleador = nombre;
			cantidadGolesHechosPorGoleador = golesJugador;
			banderaGoleador = false;
		}
 
		if(nacionalidad == "argentina" && (cantidadTarjetasRojasRecibidas < cantidadMenosTarjetasRojas || banderaTarjetasRojas == true)){
			jugadorArgentinoConMenosTarjetasRojas = nombre;
			cantidadMenosTarjetasRojas = cantidadTarjetasRojasRecibidas;
			banderaTarjetasRojas = false;
		}
 
		if(nacionalidad == "inglaterra"){
			cantidadJugadoresIngleses++;
		}
 
 /*         a)El goleador del torneo
		b)El jugador Argentino con menos rojas recibidas.
		c)El porcentaje de jugadores Ingleses de la liga
		 */
 /*
		cantidadTotalJugadores++;
		
		seguir = confirm("Quiere continuar ingresando jugadores?");
	} while (seguir);
 
 
	document.write("El jugador mas goleador es: " + jugadorMasGoleador + "<br>");
	
	if(jugadorArgentinoConMenosTarjetasRojas){
		document.write("El jugador argentino con menos rojas recibidas es: " + jugadorArgentinoConMenosTarjetasRojas + "<br>")
	}
 
	if(cantidadJugadoresIngleses > 0){
		porcentajeJugadoresIngleses = (cantidadJugadoresIngleses / cantidadTotalJugadores) * 100;
		document.write("El porcentaje de jugadores ingleses es: " + porcentajeJugadoresIngleses.toFixed(2) + "%")
	}
 }
 */