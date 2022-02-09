/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un
 descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function
CalcularPrecio ()
{
  var cantidadLamparas;
  var cantidadLamparasA;
  var costoLamparas;
  var costoLamparasA;
  var precioLamparasUnidad;
  var marcaLampara;
  var costoFinalLamparas;
  var impuestoIngreso;
  var impuestoAplicado;
  var mensaje;
  var promoSeis;
  var promoCinco;
  var promoCincoElse;
  var promoTres;
  var promoTresElse;
  var promoElse;
  var promoDos;

  cantidadLamparas = document.getElementById ('txtIdCantidad').value;
  cantidadLamparasA = parseInt (cantidadLamparas);
  costoLamparas = document.getElementById ('txtIdprecioDescuento').value;
  costoLamparasA = parseInt (costoLamparas);
  precioLamparasUnidad = 35;
  marcaLampara = document.getElementById ('Marca').value;
  costoFinalLamparas = (precioLamparasUnidad * cantidadLamparasA);
  impuestoIngreso = (costoLamparasA * 0.1.toFixed(2));
  impuestoAplicado = (costoLamparasA + impuestoIngreso).toFixed(2);
  mensaje = ("Usted pago: $" + impuestoIngreso.toFixed (2) + " de IIBB");
  
  promoSeis  = (costoFinalLamparas *0.5);
  promoCinco = (costoFinalLamparas*0.6);
  promoCincoElse = (costoFinalLamparas*0.7);
  promoCuatro = (costoFinalLamparas*0.75);
  promoCuatroElse = (costoFinalLamparas*0.8);
  promoTres = (costoFinalLamparas*0.85);
  promoTresElse = (costoFinalLamparas*0.9);
  promoElse = (costoFinalLamparas*0.95);
  promoDos= (costoFinalLamparas);
  impuestoIngreso = (costoLamparasA * 0.1);
  impuestoAplicado = (costoLamparasA + impuestoIngreso);
 


  if (cantidadLamparasA > 5)
    {
      document.getElementById ('txtIdprecioDescuento').value = (promoSeis.toFixed(2));
   	}
  else
    {
      if (cantidadLamparasA == 5 && marcaLampara == "ArgentinaLuz")
	{
	  document.getElementById ('txtIdprecioDescuento').value = (promoCinco.toFixed(2));
	}
      else
	  {
	  if (cantidadLamparasA == 5)
	  	 {
	      document.getElementById ('txtIdprecioDescuento').value =(promoCincoElse.toFixed(2));
	     }
	     else
	        {
	         if (cantidadLamparasA == 4 && (marcaLampara == "ArgentinaLuz"|| marcaLampara == "FelipeLamparas"))
		     {
		      document.getElementById ('txtIdprecioDescuento').value = (promoCuatro.toFixed(2));
		     }
	         else
		        {
		         if (cantidadLamparasA == 4)
		        {
		         document.getElementById ('txtIdprecioDescuento').value = (promoCuatroElse.toFixed(2));
		        }
		        else
		           {
		            if (cantidadLamparasA == 3 && marcaLampara == "ArgentinaLuz")
			          {
			           document.getElementById ('txtIdprecioDescuento').value = (promoTres.toFixed(2));
			          }
		               else
			              {
			              if (marcaLampara == "FelipeLamparas" && cantidadLamparas == 3)
			              {
			                document.getElementById('txtIdprecioDescuento').value = (promoTresElse.toFixed(2));
			              }
			               else
			                   {
			                    if (cantidadLamparasA == 3)
				                {
				                document.getElementById('txtIdprecioDescuento').value = (promoElse.toFixed(2));
				                }
			                   else
				                  {
				                   if (cantidadLamparasA <= 2)
				                   {
				                    document.getElementById('txtIdprecioDescuento').value = (promoDos.toFixed(2));
				                    }
                   				  }
                    		    }
			               }
		           }
		        }
	       }
		}

	}


		if (document.getElementById('txtIdprecioDescuento').value>=120)
 	{
 		document.getElementById('txtIdprecioDescuento').value+(impuestoIngreso.toFixed(2));
 		alert("Usted pagó $"+ (impuestoIngreso.toFixed(2)) + " de IIBB.");
 		
 	} 

}