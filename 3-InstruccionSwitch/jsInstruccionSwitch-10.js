/*
DIV I
Alan Magariños
Sw 10 switch anidado.
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

function mostrar()
{
	var estacion = document.getElementById('txtIdEstacion').value;
	var destino = document.getElementById('txtIdDestino').value;
	var mensaje = 'No se viaja';

  switch (estacion){
					case "Invierno":
						if(destino == "Bariloche")
							{
							 mensaje = 'Se viaja';
							}		
					break;
					case "Verano":
						if(destino == "Mar del plata" || destino == "Cataratas")
							{
							mensaje = 'Se viaja';
							} 
					break;
					case "Primavera":
						if(destino != "Bariloche")
							{
							mensaje = 'Se viaja';
							}
					break;
					case "Otoño":
							mensaje = 'Se viaja';
	 				break;
	 			   }
	alert(mensaje);

}






/*
function mostrar()
{
	var estacion;
	var destino;
	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	
	switch(estacion){ 
		case "Invierno": //Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
			  switch(destino){
    						  case "Bariloche":
    		 	 					mensaje= "Se viaja";
    								break;
    						  default:
    								mensaje= "No se viaja"; 
    						 } 
 		  			 	
 			        break; 	
		case "Verano": //Verano: Se viaja a Mar del plata y Cataratas solamente
			  switch(destino){
    						  case "Cataratas":
    		 	 			  case "Mar del plata":
        							mensaje= "Se viaja";
        							break; 
    						  default:
    								mensaje="No se viaja";
    								break;
							 }
					  
			         break;
		case "Primavera": //primavera: solo no se viaja a Bariloche
			  switch(destino){
    						  case "Bariloche":
    		 	 					mensaje= "No se viaja";
    								break;
    						   default:
    								mensaje="Se viaja"; 
    								break;
							 }
					     
			         break;	         
		case "Otoño":   //Otoño: Se viaja a todos los destinos.
    			  	mensaje="Se viaja";
									
				    }
				   
 	alert(mensaje);
}
*/
