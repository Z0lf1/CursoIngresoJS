
/*Magariños Alan DIV I
 E sw 09 switch anidado
 Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: 
bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera:
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y
Cordoba tiene el precio sin descuento
--------------------------------------------------------------------------
 gracias Raffi por explicar el debug y el , encontre al toque por que no corria. 
 spoiler: la falta de una mayuscula en un destino. 
--------------------------------------------------------------------------
*/
function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var recargo;
	var precioFinal;
	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	
	precioBase = 15000;
	porcentaje = 0;
	mensaje = "Su tarifa es de: $ ";

	switch(estacion){ 
		case "Invierno":       /*Invierno: bariloche +20%, cataratas y Cordoba -10%, Mar del plata -20%*/
			  switch(destino){
    						  case "Bariloche":
    		 	 					porcentaje = 20;
    								break;
    						  case "Mar del plata":
        							porcentaje = -20;
        							break; 
    						  default:
    								porcentaje = -10; 
    						 } 
 		  			 	
 			        break; 	
		case "Verano": /*Verano: bariloche -20%/ cataratas y Cordoba +10%/Mar del plata +20%*/
			  switch(destino){
    						  case "Bariloche":
    		 	 					porcentaje = -20;
    								break;
    						  case "Mar del plata":
        							porcentaje = 20;
        							break; 
    						  default:
    								porcentaje = 10; 
    								break;
							 }
					  
			         break;
		default: /*Otoño y Primavera: bariloche +10%/ cataratas +10%/Mar del plata +10%/Cordoba mismo valor*/
		       switch(destino){
    			  			 case "Cordoba":
    		 		    			porcentaje = 0;
    			  					break;
    			 			 default:
    								porcentaje = 10; 
    								break;
							   }			
					}
 	recargo = precioBase * porcentaje /100;

	precioFinal = precioBase + recargo;

	alert(mensaje + precioFinal);
}
/*
Magariños Alan DIV I
 E sw 09


function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var recargo;
	var precioFinal;
	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	precioBase = 15000;
	porcentaje = 0;
	

	mensaje = "Su tarifa es de: $ ";

	switch (estacion)
	{
		case "Invierno":
		if (destino == "Bariloche") //bariloche tiene un aumento del 20% 
		{
			porcentaje = 20; 
		}
		else
		{
			if (destino == "Mar del plata") //Mar del plata tiene un descuento del 20%
			{
				porcentaje = -20; 
			}
			else //cataratas y Cordoba tiene un descuento del 10% 
			{
				porcentaje = -10;
			}
		}	
		break;
		case "Verano":
		if(destino == "Bariloche")
		{
			porcentaje = -20;
		}
		else
		{
			if(destino == "Mar del Plata")
			{
				porcentaje = 20;
			}
			else
			{
				porcentaje = 10;
			}
		}
		break;
		default:
		if (destino != "Cordoba")
		{
			porcentaje = 10;
		}
		break;		
	}
	
	recargo = precioBase * porcentaje /100;

	precioFinal = precioBase + recargo;

	alert(mensaje + precioFinal);
}
*/