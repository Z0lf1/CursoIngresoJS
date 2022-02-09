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

  cantidadLamparas = document.getElementById ('txtIdCantidad').value;
  cantidadLamparasA = parseInt (cantidadLamparas);
  costoLamparas = document.getElementById ('txtIdprecioDescuento').value;
  costoLamparasA = parseInt (costoLamparas);
  precioLamparasUnidad = 35;
  marcaLampara = document.getElementById ('Marca').value;
  costoFinalLamparas = (precioLamparasUnidad * cantidadLamparasA);
  impuestoIngreso = (costoLamparasA * 0.1);
  impuestoAplicado = (costoLamparasA + impuestoIngreso);
  mensaje =
    ("Usted pago: $" + impuestoIngreso.toFixed (2) + " de IIBB");



  if (cantidadLamparasA > 5)
    {
      document.getElementById ('txtIdprecioDescuento').value =
	(costoFinalLamparas * 0.5);
    }
  else
    {
      if (cantidadLamparasA == 5 && marcaLampara == "ArgentinaLuz")
	{
	  document.getElementById ('txtIdprecioDescuento').value =
	    (costoFinalLamparas - costoFinalLamparas * 0.4);
	}
      else
	{
	  if (cantidadLamparasA == 5)
	    {
	      document.getElementById ('txtIdprecioDescuento').value =
		(costoFinalLamparas - costoFinalLamparas * 0.3);
	    }
	  else
	    {
	      if (cantidadLamparasA == 4
		  && (marcaLampara == "ArgentinaLuz"
		      || marcaLampara == "FelipeLamparas"))
		{
		  document.getElementById ('txtIdprecioDescuento').value =
		    (costoFinalLamparas - costoFinalLamparas * 0.25);
		}
	      else
		{
		  if (cantidadLamparasA == 4)
		    {
		      document.getElementById ('txtIdprecioDescuento').value =
			(costoFinalLamparas - costoFinalLamparas * 0.20);
		    }
		  else
		    {
		      if (cantidadLamparasA == 3
			  && marcaLampara == "ArgentinaLuz")
			{
			  document.getElementById ('txtIdprecioDescuento').
			    value =
			    (costoFinalLamparas - costoFinalLamparas * 0.15);
			}
		      else
			{
			  if (marcaLampara == "FelipeLamparas"
			      && cantidadLamparas == 3)
			    {
			      document.
				getElementById ('txtIdprecioDescuento').
				value =
				(costoFinalLamparas -
				 costoFinalLamparas * 0.1);
			    }
			  else
			    {
			      if (cantidadLamparasA == 3)
				{
				  document.
				    getElementById ('txtIdprecioDescuento').
				    value =
				    (costoFinalLamparas -
				     costoFinalLamparas * 0.05);
				}
			      else
				{
				  if (cantidadLamparasA <= 2)
				    {
				      document.
					getElementById
					('txtIdprecioDescuento').value =
					(costoFinalLamparas);
				    }


				}

			    }
			}
		    }
		}
	
        }
	if (costoLamparas >= 120)
    {
      alert (mensaje);

    }
	}
    }

    
}
