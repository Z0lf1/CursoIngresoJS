/*
Magariños Alan DIV I
 E sw 08
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
    var destino;
	var mensaje;

	destino = document.getElementById('txtIdDestino').value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace frio.";
			break;
		default:
			mensaje = "En este destino hace calor.";
			break;
	}
  alert(mensaje);

}