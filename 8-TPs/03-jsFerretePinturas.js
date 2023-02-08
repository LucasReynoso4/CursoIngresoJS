/* Reynoso Lucas DIV Z Grupo 1
 Integrador clase 3 (TP 3)
*/
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let centigrados;
    let temperatura;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    
    centigrados=  (temperatura -32) * (5/9);
    
    alert( temperatura + " grados Fahrenhiet son  " + centigrados.toFixed(2) + " grados Centigrados." );
	
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let temperatura;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    
    
    fahrenheit = temperatura * 9/5 + 32;
    
    

    alert(temperatura + " grados centigrados son " + fahrenheit + " grados Fahrenhiet.");
}
