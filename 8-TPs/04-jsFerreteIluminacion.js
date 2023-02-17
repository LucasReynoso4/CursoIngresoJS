/* Reynoso Lucas DIV Z Grupo 1
 Integrador (TP 4 A) Con Switch 
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo Lamparas de $35 pesos final.
A.	Si compra 6 o más  lamparasIngresadas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparasIngresadas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparasIngresadas bajo consumo marca "ArgentinaLuz" o “FelipeLamparass” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparasIngresadas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparass” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let subtotal;
  let cantidadLamparas;
  let precioLamparas;
  let descuento;
  let total;
  let marca;
  let mensaje;
  let iibb;

  precioLamparas = 35;
  descuento = 1;
  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  cantidadLamparas = parseInt(cantidadLamparas);
  marca = document.getElementById("Marca").value;

  if (cantidadLamparas >= 6) {
     descuento = 0.5;
  }
  switch (cantidadLamparas) {
    case 5:
      if(marca == "ArgentinaLuz"){
        descuento = 0.6;
      }else{
        descuento = 0.7;
      }
    break;
    case 4:
      if(marca == "ArgentinaLuz"|| marca == "FelipeLamparas"){
        descuento = 0.75;
      } else {
        descuento = 0.8;
         }
      break;
    case 3:
      if(marca == "ArgentinaLuz"){
        descuento = 0.85;
      }else{
        if(marca == "FelipeLamparas"){
          descuento = 0.9;
        }else{
          descuento = 0.95;
        }
      }
          break;
   
        default:
      if (cantidadLamparas >= 6) {
        descuento = 0.5;
     }
      
      
  }
  
  subtotal = cantidadLamparas * precioLamparas;
  total = subtotal * descuento;

  if (total > 120) {
    iibb = total * 1.1;
    total = total + iibb;
    mensaje = "usted pago: " + iibb + " de impuestos";
  }

  document.getElementById("txtIdprecioDescuento").value = total;
  alert(mensaje);
}
