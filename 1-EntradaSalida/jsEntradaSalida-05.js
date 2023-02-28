/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/



function mostrar()
{	
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let bodegaAvellaneda; 
	let bodegaCaba;
	let bodegaLanus;
	let ingDeposito;
	let ingDescripcion;
	let ingPeso;
	let contadorBodega;
	let banderaPesoMax;
	let pesoMax;
	let productoMaximo;
	let respuesta;

	contadorBodega = 0;
	banderaPesoMax = true;
	respuesta = true;


	do{
		do{

		}while(ingDeposito != "avellaneda" && ingDeposito != "caba" && ingDeposito != "lanus")
		ingProducto = prompt("Ingrese en que deposito deja el producto ");
		do{
			ingDescripcion = prompt("Ingrese la descripcion del producto ingresado ");
		}while(!IsNaN(ingDescripcion));
		do{
			ingPeso = prompt("Ingrese el peso del producto que ingresa a la bodega");
		}while(isNaN(ingPeso) || ingPeso < 0);

		if(banderaPesoMax == true){
			banderaPesoMax = false
			pesoMax = ingPeso;
			productoMaximo = ingDescripcion;
		}else{
			if(ingPeso > pesoMax ){
			pesoMax = ingPeso;
			productoMaximo = ingDescripcion;

			}

			
		}
		


		respuesta = confirm ("Desea seguir ingresando productos?")

	}while(respuesta == true);






}

