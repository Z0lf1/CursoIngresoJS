/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/
function mostrar()
{
 var ingresoNumeroPrimero;
 var ingresoNumeroSegundo;
 var resultado;
 var mensaje;
 ingresoNumeroPrimero=prompt("ingrese el primer numero");
 ingresoNumeroPrimero=parseInt(ingresoNumeroPrimero);
 while(isNaN(ingresoNumeroPrimero))
 {
 	ingresoNumeroPrimero=prompt("Error ingrese el primer numero");
 	ingresoNumeroPrimero=parseInt(ingresoNumeroPrimero);
 }
 ingresoNumeroSegundo=prompt("Ingrese el segundo numero");
 ingresoNumeroSegundo=parseInt(ingresoNumeroSegundo);
 while(isNaN(ingresoNumeroPrimero))
 {
 	ingresoNumeroSegundo=prompt("Error ingrese el segundo numero");
 	ingresoNumeroSegundo=parseInt(ingresoNumeroSegundo);
 }
 	if(ingresoNumeroPrimero==ingresoNumeroSegundo)
	{//Si son iguales los muestro concatenados.
		resultado= ingresoNumeroPrimero+""+ingresoNumeroSegundo;
	}
	else
	{
		if (ingresoNumeroPrimero>ingresoNumeroSegundo) 
		{//Si el primero es mayor, los resto,
			resultado= ingresoNumeroPrimero - ingresoNumeroSegundo;
		}
		else
		{//de lo contrario los sumo.
			resultado=ingresoNumeroPrimero+ingresoNumeroSegundo;
		}
	}
	if (resultado>10) 
	{//resultado> 10 muestro el mensaje "la suma es xxx y supero el 10".
		mensaje="La suma es "+resultado+" y supero el 10";
	}
	else
		{
			mensaje=resultado;
		}
	alert(mensaje);
	}