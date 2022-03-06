/*
CONSIGNAS
1. UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, se le pide a los pasajeros: nombre, edad (validar 13-85),
cantidad de asientos que desea reservar (validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el mínimo - 18000 kilómetros máximo),
el precio por asiento es 1500 pesos, informar:
A. La recaudación total del vuelo.
B. La cantidad total de asientos ocupados.
C. La edad promedio por pasajero.
D. La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia es 5000 km ó 13000 km
*/

function mostrar()
{
	var nombre;
	var edad;
	var asientos;
	var kilometros;

	var recaudacion;
	var respuesta;
	var totalAsientos;
	var contadorPasajeros;
	var totalEdad;
	var contadorViaje;
	var promedioEdad;

	recaudacion = 0;
	respuesta = true;
	totalAsientos = 0;
	totalEdad = 0;
	promedioEdad = 0;
	contadorPasajeros = 0;
	contadorViaje = 0;


	while (respuesta == true) {

		nombre = prompt ("Ingrese el nombre del pasajero.");
		      while(!isNaN(nombre))
		      {
		         nombre = prompt ("Error... Ingrese un nombre válido.");
		      }

		edad = prompt ("Ingrese la edad del pasajero.");
		edad = parseInt(edad);
			while(isNaN(edad) || edad < 13 || edad > 85)
				{
		            edad = prompt ("Error... Reingrese una edad válida entre 13 y 85 años.");
		            edad = parseInt(edad);
	            }

	    asientos = prompt ("Ingrese la cantidad de asientos que desea reservar.");
		asientos = parseInt(asientos);
			while(isNaN(asientos) || asientos < 1 || asientos > 5)
				{
		            asientos = prompt ("Error... Ingrese una cantidad de asientos válida. El máximo de asientos por reserva es de 5.");
		            asientos = parseInt(asientos);
	            }

	    kilometros = prompt ("Ingrese la cantidad de kilometros del viaje.");
		kilometros = parseInt(kilometros);
			while(isNaN(kilometros) || kilometros < 3000 || kilometros > 18000)
				{
		            kilometros = prompt ("Error... Ingrese un kilometraje válido. El mínimo admitido es 3000 y el máximo de 18000.");
		            kilometros = parseInt(kilometros);
	            }

	    if (edad > 17 && edad < 46) {
	    	if (kilometros == 5000 || kilometros == 3000) {
	    		contadorViaje++;
	    	}
	    }

	    totalAsientos = totalAsientos + asientos;
	    totalEdad = totalEdad + edad;
	    contadorPasajeros++;
	    respuesta = confirm("¿Desea ingresar otro ingreso de pasajeros?");
	}

	recaudacion = totalAsientos * 1500;
	promedioEdad = totalEdad / contadorPasajeros;

	document.write("La recaudación total del vuelo es de: $" + recaudacion + " .<br>");
	document.write("El vuelo cuenta en total con " + totalAsientos + " asientos ocupados.<br>");
	document.write("La edad promedio de los pasajeros es de " + promedioEdad + ".<br>");
	if (contadorViaje > 0) {
	document.write("La cantidad de pasajeros de entre 18 y 45 años que realizarán un viaje a un destino cuya distancia es 5000 km o 13000 km es de "+ contadorViaje + " pasajeros.<br>");
	} else {
	document.write("No se ingresaron pasajeros que cumplan con las condiciones requeridas.<br>");
	}
	
}