/*
3.Se debe llevar a cabo el registro de los ingresos a la guardia, los mismos se dividen en tres grupos:
clínica, pediátrica y traumatológica . Se pide el ingreso del nombre del paciente, la edad y el tipo de atención (anteriormente mencionado).
Al momento de la recepción se solicita el tipo de prestación (prepaga - obra social - sin prestación). El valor de la consulta es de $2500,
en caso de contar con prepaga la cobertura es del 100%, para obra social es del 50%.

Se precisa saber:
A.Ingresos por obra social y sin prestación.
B.Nombre y tipo de prestación del paciente de más edad en traumatología.
C.Qué tipo de prestación es la más utilizada.
D.Cuántos pacientes menores de edad solicitaron atención traumatológica.
E.El total en pesos de todas las prestaciones.
F.El reintegro que deberán hacer las prepagas.
*/

function mostrar()
{
	var nombre;
	var edad;
	var tipoAtencion;
	var tipoPrestacion;

	var respuesta;
	var contadorObraSocial;
	var contadorSinPrestacion;
	var contadorPrepaga;
	var contadorMenoresTraumatologia;
	var ingresoTraumatologia;
	var mayorEdadTraumatologia;
	var mayorNombreTraumatologia;
	var mayorPrestacionTraumatologia;
	var totalReintegrosPrepagas;
	var prestacionMasUtilizada;
	var totalPrestaciones;
	var prestacionesPrepaga;

	respuesta = true;
	ingresoTraumatologia = false;
	contadorObraSocial = 0;
	contadorSinPrestacion = 0;
	contadorPrepaga = 0;
	contadorMenoresTraumatologia = 0;
	totalPrestaciones = 0;
	prestacionesPrepaga = 0;

	while (respuesta == true)
	{
		nombre = prompt ("Ingrese el nombre del paciente.");
		      while(!isNaN(nombre))
		      {
		         nombre = prompt ("Error... Ingrese un nombre válido.");
		      }

		edad = prompt ("Ingrese la edad del paciente.");
		edad = parseInt(edad);
			while(isNaN(edad))
				{
		            edad = prompt ("Error... Reingrese una edad válida.");
		            edad = parseInt(edad);
	            }

		tipoAtencion = prompt("Ingrese el tipo de atención: Clínica, Pediátrica o Traumatológica.");
	    while(tipoAtencion != "Clínica" && tipoAtencion != "Pediátrica" && tipoAtencion != "Traumatológica")
		{
			tipoAtencion = prompt("Error... Ingrese un tipo de atención válido: Clínica, Pediátrica y Traumatológica.");
		}

		tipoPrestacion = prompt("Ingrese el tipo de prestación: Prepaga, Obra social o Sin prestación.");
	    while(tipoPrestacion != "Prepaga" && tipoPrestacion != "Obra social" && tipoPrestacion != "Sin prestación")
		{
			tipoPrestacion = prompt("Error... Ingrese un tipo de prestación válida: Prepaga, Obra social o Sin prestación.");
		}


		switch (tipoPrestacion) {
			case "Obra social":
			contadorObraSocial++;
			totalPrestaciones = totalPrestaciones + 1250;
			break;

			case "Sin prestación":
			contadorSinPrestacion++;
			totalPrestaciones = totalPrestaciones + 2500;
			break;

			case "Prepaga":
			contadorPrepaga++;
			break;
		}

		if (tipoAtencion == "Traumatológica")
		{
			if (mayorEdadTraumatologia < edad || ingresoTraumatologia == false) {
				mayorEdadTraumatologia = edad;
				mayorNombreTraumatologia = nombre;
				mayorPrestacionTraumatologia = tipoPrestacion;
				ingresoTraumatologia = true;
			}

			if (edad < 18) {
				contadorMenoresTraumatologia++;
			}
		}
		respuesta = confirm("¿Desea ingresar otro paciente?");
	}



		if (contadorObraSocial > contadorSinPrestacion && contadorObraSocial > contadorPrepaga) {
			prestacionMasUtilizada = "Obra Social";
		} else {
				if (contadorSinPrestacion > contadorObraSocial && contadorSinPrestacion > contadorPrepaga) {
					prestacionMasUtilizada = "Sin Prestación";
				} else {
					prestacionMasUtilizada = "Prepaga";
				}
		}

		prestacionesPrepaga = contadorPrepaga * 2500;


	document.write("Se realizaron " + contadorObraSocial + " ingresos por Obra Social y " + contadorSinPrestacion + " ingresos Sin Prestacion.<br>");
	if (ingresoTraumatologia == true) {
	document.write("El paciente con mayor edad en Traumatología fue "+ mayorNombreTraumatologia +" y su tipo de prestación fue: " + mayorPrestacionTraumatologia +".<br>");
	} else {
	document.write("No se ingresaron pacientes en Traumatología.<br>");
	}
	document.write("El tipo de prestación más utilizada fue " + prestacionMasUtilizada + ".<br>");
	if (contadorMenoresTraumatologia > 0) {
	document.write("La cantidad de menores de edad ingresados en Traumatología fue de "+ contadorMenoresTraumatologia + ".<br>");
	} else {
	document.write("No se ingresaron menores de edad a Traumatología.<br>");
	}
	document.write("El monto total abonado en consultas fue de: $" + totalPrestaciones + " .<br>");
	document.write("El monto total que deberán reintegrar las prepagas por las consultas realizadas fue de: $" + prestacionesPrepaga + " .<br>");

}
