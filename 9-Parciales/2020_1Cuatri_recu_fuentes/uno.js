/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let productoIngresado;
	let precio;
	let cantidadDeProductos;
	let marca;
	let fabricante;
	let control;
	let banderaAlcohol;
	let alcoholMasBarato;
	let fabricanteAlcohol;
	let cantidadAlcohol;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let productoConMasUnidades;
	let promedioConMasUnidades;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;

	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	
	banderaAlcohol = true;

	for(control = 0; control < 5; control++)
	{
		do
		{
			productoIngresado = prompt("Ingrese un producto: \n barbijo \n jabon \n alcohol");
		}
		while(productoIngresado != "barbijo" && productoIngresado!= "jabon" && productoIngresado != "alcohol");
		do
		{
			precio = prompt("ingrese un precio entre 100 y 300");
			precio = parseFloat(precio);
		}
		while(isNaN(precio) || precio < 100 || precio > 300);
		do
		{
			cantidadDeProductos = prompt("Ingrese una cantidad de hasta 1000 unidades");
			cantidadDeProductos = parseInt(cantidadDeProductos);
		}
		while(isNaN(cantidadDeProductos) || cantidadDeProductos <1 || cantidadDeProductos > 1000);
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");






		switch (productoIngresado) {
			case "alcohol":

			acumuladorAlcohol = acumuladorAlcohol + cantidadDeProductos;
			contadorAlcohol ++;

	 		if(precio < alcoholMasBarato || banderaAlcohol == true)
			{
				alcoholMasBarato = precio;
				banderaAlcohol = false;
 				fabricanteAlcohol = fabricante;
				cantidadAlcohol = cantidadDeProductos;
			}
				
				break;
			case "barbijo": 
			
			acumuladorBarbijo = acumuladorBarbijo + cantidadDeProductos;
			contadorBarbijo ++;
			break;


		
			default:
			acumuladorJabon = acumuladorJabon + cantidadDeProductos;
			contadorJabon ++;
				
		}

	// 	if(productoIngresado == "alcohol")
	// 	{ 	
	// 		acumuladorAlcohol = acumuladorAlcohol + cantidadDeProductos;
	// 		contadorAlcohol ++;

	// 		if(precio < alcoholMasBarato || banderaAlcohol == true)
	// 		{
	// 			alcoholMasBarato = precio;
	// 			banderaAlcohol = false;
	// 			fabricanteAlcohol = fabricante;
	// 			cantidadAlcohol = cantidadDeProductos;
				
	// 		}
	// 	}else{
	// 		if(productoIngresado == "barbijo"){
	// 			acumuladorBarbijo = acumuladorBarbijo + cantidadDeProductos;
	// 			contadorBarbijo ++;
	// 		}else{
	// 			acumuladorJabon = acumuladorJabon + cantidadDeProductos;
	// 			contadorJabon ++;
	// 		}

	// 	}

	// }

	if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol){

		promedioConMasUnidades = acumuladorJabon / contadorJabon;
		productoConMasUnidades = " jabones";
		
	}else{
		if(acumuladorAlcohol> acumuladorBarbijo){
			promedioConMasUnidades = acumuladorAlcohol/ contadorAlcohol;
			productoConMasUnidades =" alcoholes" ;

		}else{
			promedioConMasUnidades = acumuladorBarbijo / contadorBarbijo;
			productoConMasUnidades = " barbijos";

		}
	}

	if(banderaAlcohol == false){
	document.write("El alcohol mas barato cuesta: " + alcoholMasBarato + "<br>"+ "El fabricante es: " +  fabricanteAlcohol + "<br>" + "La cantidad a comprar es: " + cantidadAlcohol + "<br>" );
	}

	
	document.write("El promedio del producto mas comprado es: " + promedioConMasUnidades + "  " + productoConMasUnidades + "<br>" );

	if(acumuladorJabon > 0){
		document.write("La cantidad de unidades de jabones es: " + acumuladorJabon);
	}
	


  }
}
