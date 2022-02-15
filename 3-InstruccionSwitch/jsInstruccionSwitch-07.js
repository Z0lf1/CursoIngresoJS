/*
Magariños Alan DIV I
 E sw 07
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
var destino;
var mensaje;
destino = document.getElementById('txtIdDestino').value;

switch(destino){
    case "Bariloche":
    	mensaje = "se encuentra al SurEste de nuestro país"
    	break;
    case "Cataratas":
      	mensaje = "se encuentra al NorEste de nuestro país"
        break; 
    case "Mar del plata":
        mensaje = "se encuentra al Este de nuestro país"
        break; 
    default:
    	mensaje = "se encuentra al Sur de nuestro país" 
    	break;     

}

alert(mensaje);

}