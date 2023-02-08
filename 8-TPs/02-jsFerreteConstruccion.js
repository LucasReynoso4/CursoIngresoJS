/* Reynoso Lucas DIV Z Grupo 1
TP 2
*/
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo; 
    let ancho;
    let cantidadDeAlambre;
    let perimetroTerreno;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    

    largo = parseFloat(largo)
    ancho = parseFloat(ancho)

    perimetroTerreno = (largo + ancho) *2; 

    cantidadDeAlambre = perimetroTerreno *3;

    alert("La cantidad de alambre requerido " + cantidadDeAlambre.toFixed(2) + " mts")

    



}
function Circulo () 
{
    let radio;
    let cantidadDeAlambre;
    let perimetroTerreno;

    radio = document.getElementById("txtIdRadio").value;    
    radio = parseFloat(radio);

    perimetroTerreno = 2 *  Math.PI * radio ;

    cantidadDeAlambre = perimetroTerreno *3;

    alert("La cantidad de alambre requerido " + cantidadDeAlambre.toFixed(2) + " mts")
	
}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsaCemento;
    let BolsaCal;
    let metroCuadrados;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    
    largo = parseFloat(largo)
    ancho = parseFloat(ancho)

    metroCuadrados= largo * ancho;
    bolsaCemento = metroCuadrados * 2;
    BolsaCal = metroCuadrados *3;

    alert("Se necesitan " + BolsaCal + " bolsas de cal y " + bolsaCemento + " bolsas de cemento.")





	
}