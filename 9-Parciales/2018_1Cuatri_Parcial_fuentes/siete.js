/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt 
de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos,
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
	var ingresoNota;
	var sexo;

	var contadorAlumnos;
	var acumuladorNotas;
	var promedioNotasTotales;
	var notaMasBaja;
	var banderaNota;
	var sexoMasBaja;
	var contadorAlumnosVApro;
	acumuladorNotas/5;	//a) El promedio de las notas totales.
	
	contadorAlumnosVApro=0;
	banderaNota=true;
	contadorAlumnos=0;
	acumuladorNotas=0;
	while(contadorAlumnos<5)
	{
		ingresoNota=prompt("Ingresar nota de alumn@ entre 1 y 10");
		ingresoNota=parseInt(ingresoNota);
		acumuladorNotas+=ingresoNota;
		while(ingresoNota<1||ingresoNota>10)//notas (validar entre 0 y 10)
		{
			ingresoNota=prompt("Error, ingresar nota valida entre 1 y 10 de alumn@");
			ingresoNota=parseInt(ingresoNota);
		}
		sexo=prompt("Ingrese sexo de alumn@");
		while(sexo!="m" && sexo!="f")//sexo (validar el sexo “f” o “m”)
		{
			sexo=prompt("Ingrese sexo de alumn@");
		}
		if(ingresoNota<notaMasBaja||banderaNota==true)
		{//b) La nota más baja y el sexo de esa persona.
			notaMasBaja=ingresoNota;
			sexoMasBaja=sexo;
			banderaNota=false;
		}
		if(ingresoNota>5&&sexo=="m")
		{//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
			contadorAlumnosVApro++;
		}
		contadorAlumnos++;
	}
	promedioNotasTotales=acumuladorNotas/5;	//a) El promedio de las notas totales.
	mensaje=(" El promedio de las notas totales es de: "+ promedioNotasTotales)+"\n";
	mensaje+=("	La nota mas baja es del genero: "+ sexoMasBaja)+"\n";
	mensaje+=(" La cantidad de alumnos varones con nota igual o superior a 6 es de: "+ contadorAlumnosVApro);

	alert(mensaje);
}
