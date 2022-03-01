/*

var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var temperaturaMaxima;
	var banderaTemperatura;
	var nombreMasTemperatura;
	var contadorViudo;
	var contadorSoltero;
	var acumuladorSolteros;
	var contadorHombreViudo;
	var contadorTerceraEdad;
	var promedio;
	var viudoSoltero;

	respuesta = "si";
	banderaTemperatura = false;
	contadorViudo= 0;
	contadorSoltero= 0;
	acumuladorSolteros= 0;
	contadorHombreViudo= 0;
	contadorTerceraEdad= 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el nombre");
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(edad < 0 )
		{
			edad = prompt("Ingrese una edad valida");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese el sexo: f, m, o nb");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Reingrese el sexo");
		}
		estadoCivil = prompt("Ingrese estado civil: soltero, casado, viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese un estado civil valido");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		while(temperaturaCorporal < 35 || temperaturaCorporal > 45 )
		{
			temperaturaCorporal = prompt("Ingrese una temperatura corporal valida");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if(temperaturaMaxima < temperaturaCorporal || banderaTemperatura == false)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMasTemperatura = nombre;
			banderaTemperatura = true;

		} 
		
		switch(estadoCivil)
		{
			case "viudo":
			if(edad > 17)
			{
				contadorViudo++;
			}
			
			if(sexo == "m")
			{
				contadorHombreViudo++;
			}
			
			break;
			case "soltero":
			if(sexo == "m")
			{
				contadorSoltero++;
				acumuladorSolteros += edad;

			}
			break;
			
		}
		
		if(edad > 60 && temperaturaCorporal > 38)
		{	
			contadorTerceraEdad++;
		}
		
		respuesta = prompt("¿Desea ingresar a otra persona?");
	}
	if(estadoCivil == "soltero")
	{
		promedio = acumuladorSolteros / contadorSoltero;
		document.write("Promedio entre hombres solteros :" + promedio + "<br>");

	}

	viudoSoltero = contadorSoltero + contadorHombreViudo;
	document.write("Nombre de la persona con mas temperatura: " + nombreMasTemperatura + "<br>");
	document.write("Cantidad de viudos mayores de edad : " + contadorViudo + "<br>");
	document.write("Cantidad de hombres solteros o viudos: " + viudoSoltero + "<br>");
	document.write("Cantidad de personas de tercera edad con temperatura + 38: " + contadorTerceraEdad + "<br>");

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura.
e) El promedio de edad entre los hombres solteros.

*/
function mostrar()
{
	var nombrePasajero;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var mayorTemperatura;
	var tempeBandera;
	var personaMasTemperatura;
	var contadorIngreso;

	
	var mayoresViudos;
	var contadorMasculino;
	var contadorFemenino;
	
	
	var cantidadHombresSv;
	var contadorSoltero;
	var promedioSolteros;
	var contadorViejitosCandentes;
	var acumuladorEdadS;
	var ingresoHSoltero;

	contadorViejitosCandentes= 0;
	contadorIngreso= 0;
	respuesta = true;
	tempeBandera= false;
	contadorFemenino=0;
	contadorMasculino=0;
	cantidadHombresSv=0;
	contadorSoltero=0;
	mayoresViudos=0;
	acumuladorEdadS=0;
	ingresoHSoltero=0;
	while(respuesta==true)
  {
  		contadorIngreso++
  		nombrePasajero = prompt("Ingrese nombre: ");

  		edad= prompt("Ingrese la edad con un valor numerico mayor a cero: ");
  		edad= parseInt(edad);
  		while(isNaN(edad)|| edad<1)
  		{
	  		edad = prompt("Error. Ingrese una edad válida con un valor numerico superior a cero: ");
	  		edad = parseInt(edad);
  		}
  		sexo= prompt("Indique su sexo unicamente ingresando f para femenino ó m para masculino: ");
  		while(sexo!="f" && sexo!="m")
  		{
  			sexo= prompt("Error, por favor indique su sexo unicamente ingresando f ó m según corresponda: ");
  		}
  		switch(sexo){
			case "f":
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
			}
  	
  		estadoCivil= prompt("Ingrese su estado civil soltero, casado o viudo");
  		while(estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo")
  		{
  			estadoCivil= prompt("Error, por favor indique su estado civil unicamente ingresando soltero, casado o viudo según corresponda: ");
  		}
  		
  		temperatura=prompt("Ingrese la temperatura del pasajero","Ingrese la temperatura");
  		temperatura=parseFloat(temperatura);
		while(temperatura<30||temperatura>52)
		{
			temperatura=prompt("Error. Ingrese una temperatura mayor a 30° o menor a 52°","Ingrese la temperatura");
			temperatura=parseFloat(temperatura);
		}
		if(temperatura>mayorTemperatura || tempeBandera==false) //a.
		{ 
			mayorTemperatura= temperatura;
			personaMasTemperatura= nombrePasajero;
			tempeBandera= true;
		}
		if (edad>60 && temperatura>38)//d. personas de mas de 60 años mas de 38 de temperatura.
  		{
  			contadorViejitosCandentes++;
  		}
		
		if (sexo=="m" && (estadoCivil=="soltero" || estadoCivil=="viudo"))//c.
		{
			cantidadHombresSv++;
		}
 	
		if (edad>17 && estadoCivil=="viudo" )// b.
		{
			mayoresViudos++;
		}
		
		if(sexo=="m" && estadoCivil=="soltero")//e) El promedio de edad entre los hombres solteros.
		{
		 	ingresoHSoltero++;
		 	acumuladorEdadS+=edad;
		 	console.log(ingresoHSoltero);
		 	console.log(acumuladorEdadS);
		} 	
		respuesta=confirm("desea continuar?"); 

	}
	if(estadoCivil == "soltero")
	{
	promedioSolteros= acumuladorEdadS/ingresoHSoltero;
	document.write("El promedio de edad entre hombres solteros es: "+promedioSolteros+ "<br>");
	}
	
	document.write("El nombre de la persona con mayor temperatura es: "+personaMasTemperatura+ "<br>");
	document.write("La cantidad de mayores viudos es: "+mayoresViudos+ "<br>");
	document.write("Cantidad de hombres que hay solteros o viudos: "+cantidadHombresSv+ "<br>");
	document.write("Cantidad de personas de la tercera edad con temperatura superior a 38°: "+contadorViejitosCandentes+ "<br>");
	
}
/*a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura.
e) El promedio de edad entre los hombres solteros.*/