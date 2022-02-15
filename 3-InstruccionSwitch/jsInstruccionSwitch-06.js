/*/*Magariños Alan DIV I
 E sw 06
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/

function mostrar()
{
	var horaDelDia;
	var mensaje;
	horaDelDia = document.getElementById('txtIdHora').value;
	horaDelDia = parseInt(horaDelDia);

	mensaje = "La hora no existe";

	if (horaDelDia>11 && horaDelDia<=19) 
 	{
 	  	mensaje = " Es de tarde.";
	}
	else
    {
 	 	if (horaDelDia>=20 && horaDelDia<=24 || horaDelDia>=0 && horaDelDia<=6)
	   	{
	 		mensaje = "Es de noche.";
	 	}
	    else
        {
      		if (horaDelDia>=7 && horaDelDia<=11) 
		    {
		    	mensaje = "Es de mañana";
		    }
    	}

	}	
  alert(mensaje); 
}   