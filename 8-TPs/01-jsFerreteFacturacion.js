/* Reynoso Lucas DIV Z Grupo 1
TP 1
*/
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios;
    let ivaAgregado

   precioUno = document.getElementById("txtIdPrecioUno").value;
   precioDos = document.getElementById("txtIdPrecioDos").value;
   precioTres = document.getElementById("txtIdPrecioTres").value;

   precioUno = parseFloat(precioUno);
   precioDos = parseFloat(precioDos);
   precioTres = parseFloat(precioTres);


   sumaDePrecios = precioUno + precioDos + precioTres;

   alert("El precio final es " + sumaDePrecios.toFixed(2));





	
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedioPrecios

   precioUno = document.getElementById("txtIdPrecioUno").value;
   precioDos = document.getElementById("txtIdPrecioDos").value;
   precioTres = document.getElementById("txtIdPrecioTres").value;
   

   precioUno = parseFloat(precioUno);
   precioDos = parseFloat(precioDos);
   precioTres = parseFloat(precioTres);


   promedioPrecios = precioUno + precioDos + precioTres / 3;

   alert("El promedio " + promedioPrecios.toFixed(2));


	
}
function PrecioFinal () 
{
  

   let precioUno;
   let precioDos;
   let precioTres;
   let sumaDePrecios;
   let iva;
   let precioFinal;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  precioUno = parseFloat(precioUno);
  precioDos = parseFloat(precioDos);
  precioTres = parseFloat(precioTres);

    
  sumaDePrecios = precioUno + precioDos + precioTres;
   iva = sumaDePrecios * 0.21;     
   precioFinal = sumaDePrecios + iva;
 

  alert("El precio final es " + precioFinal .toFixed(2));


	
}