/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) 
, el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
function mostrar()
{
	var ingresoAltura;
	var sexo;
	var promedioAlturas;
	var alturaMasBaja;
	var cantidadMujeresAltas;
	var sexoPersonaBaja;

	cantidadMujeresAltas=0;
	acumuladorAltura=0;
	contadorAlumnos=0;
	banderaAltura=true;
	
	while(contadorAlumnos<5)
	{	
		ingresoAltura=prompt("Ingrese altura");
		ingresoAltura=parseInt(ingresoAltura);
		while(ingresoAltura<0||ingresoAltura>250)
		{
	 		ingresoAltura=prompt("Ingrese altura");
	 		ingresoAltura=parseInt(ingresoAltura);
	 	}
	 	sexo=prompt("ingrese sexo f para femenino y m para masculino");
		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("error ingrese sexo f para femenino y m para masculino");
		}
		switch(sexo)
		{
			case "m":
			break;
			case "f":
				if (ingresoAltura>190)
				{//c) La cantidad de muheres que su altura supere los 190 centimetros.
					cantidadMujeresAltas++;
				}
			break;
		}
		if (ingresoAltura<alturaMasBaja|| banderaAltura==true)
		 {//b) La altura más baja y el sexo de esa persona.
		 	alturaMasBaja=ingresoAltura;
		 	sexoPersonaBaja=sexo;
		 }
		if (ingresoAltura>alturaMasAlta|| banderaAltura==true)
		{
			alturaMasBaja=ingresoAltura;
			banderaAltura=false;
		}
	acumuladorAltura+=ingresoAltura;
	contadorAlumnos++;
	}
//a) El promedio de las alturas totales.
promedioAlturas=acumuladorAltura/5;
mensaje="El promedio de las alturas totales es "+promedioAlturas+"\n";
mensaje+="La altura mas baja es "+alturaMasBaja+" Y su sexo es "+sexoPersonaBaja+"\n";
mensaje+="La cantidad de mujeres de mas de 190cm es "+cantidadMujeresAltas+"\n";
alert(mensaje);
}