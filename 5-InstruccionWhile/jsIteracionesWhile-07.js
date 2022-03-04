/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
    el ingreso por prompt de
    1-alturas en centimetros    (validar entre 0 y 250) ,
    2-la edad (validar)
    3-temperatura(validar)
    4-el sexo(validar el sexo “f” o “m” o "nb")
    5-nota (validar)
    6-nombre
    de 5 estudiantes de la UTN, 
1ERA PARTE
    informar :
    a)El promedio de las alturas totales.
    b)Cantidad de personas de cada sexo.
    c)Cantidad de aprobados(más de 6)
    d)La cantidad de mujeres que su altura supere
     los 190 centímetros. 
-----------------------------------------------------------------------------------

function mostrar()
{
	var altura; //centimetros (entre o y 250)
    var edad; //validar
    var temperatura;//validar
    var sexo; //validar f,m o nb
    var nota; //(validar)
    var nombre; // de 5 estudiantes de la UTN,
	var cantidadMaxima;
    var acumuladorAlturas;
    var promedioAltura;
    var contadorAlumnos;
    var contadorM;
    var contadorF;
    var contadorNb;
    var contadorAprobados;
    var contadorMujeresAltas;

	sexo=""

	contadorAlumnos= 0;
	contadorM= 0;
	contadorF= 0;
	contadorNb= 0;
	contadorAprobados= 0;
	acumuladorAlturas=0;
	cantidadMaxima=5;
	contadorMujeresAltas=0;

	while(contadorAlumnos<cantidadMaxima){
		altura=prompt("Ingrese altura: ");
		altura=parseInt(altura);
		
		while(altura<0 || altura>250){
			altura=prompt("Ingreso erroneo, ingrese altura nuevamente: ");
			altura=parseInt(altura);
		}
		edad=prompt("Ingrese edad: ","Ingrese edad: ");
		edad=parseInt(edad);
		while(edad<17 || edad<80){
			edad=prompt("Ingreso erroneo, ingrese edad: ");
			edad=parseInt(edad);
		}
		temperatura=prompt("Ingrese temperatura: "); //-29 muerte cerebral mas de 52 
		temperatura=parseInt(temperatura);
		while(temperatura<29 || temperatura> 51){
			temperatura=prompt("Ingreso erroneo, ingrese temperatura entre 30° y 52°: "); 
			temperatura=parseInt(temperatura);
		}
		nota=prompt("Ingrese nota");
		nota= parseInt(nota);
		while(isNaN(nota)==true && (nota<0 || nota>10)){
			nota=prompt("Ingreso incorrecto. Ingrese la nota en formato numerico entre el 1 y el 10: ");
			nota= parseInt(nota);
		}	
		sexo=prompt("Ingrese su sexo, 'm' para masculino, 'f' para femenino o 'nb' para no binario");
		while(sexo!='f' && sexo!='m'&&sexo!='nb'){
		sexo=prompt("Ingrese un sexo dentro del rango");
		}
		nombre= prompt(nombre);
	}

}
*/


/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN, 


1ERA PARTE
	informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	 los 190 centímetros.
	 

function mostrar()
{
	let alturaCentimetros;
	let temperatura;
	let edad;
	let sexo;
	let nota;
	let nombre;
	let cantidadMaximaDeIteraciones;
	let acumuladorAlturas;
	let contadorAlumnos; 
	let promedioAlturas;
	let contadorMasculino;
	let contadorFemenino;
	let contadorNoBinarios;
	let contadorAlumnosAprobados;
	let contadorMujeresSuperioresA190Cm;

	contadorAlumnos=0;
	contadorMasculino=0;
	contadorFemenino=0;
	contadorNoBinarios=0;
	contadorAlumnosAprobados=0;
	acumuladorAlturas=0;
	cantidadMaximaDeIteraciones=5;
	contadorMujeresSuperioresA190Cm=0;
	
	
	while(contadorAlumnos<cantidadMaximaDeIteraciones){
		alturaCentimetros=prompt("Ingrese su altura");
		alturaCentimetros=parseInt(alturaCentimetros);
		
		while(alturaCentimetros<0||alturaCentimetros>250){
			alturaCentimetros=prompt("Error. Ingrese una altura mayor a 0 y menor a 250");
			alturaCentimetros=parseInt(alturaCentimetros);
		} // while de validacion
		acumuladorAlturas+=alturaCentimetros;
		//acumuladorAlturas=acumuladorAlturas+alturaCentimetros;
		
		
		edad=prompt("Ingrese su edad","Ingrese edad");
		edad=parseInt(edad);

		while(edad<17||edad>80){
			edad=prompt("Error. Ingrese una edad valida entre 18 y 80","Ingrese edad");
			edad=parseInt(edad);
		}


		temperatura=prompt("Ingrese su temperatura");
		temperatura=parseFloat(temperatura);

		while(temperatura<30||temperatura>52){
			temperatura=prompt("Error. Ingrese una temperatura mayor a 30° o menor a 52°","Ingrese su temperatura");
			temperatura=parseFloat(temperatura);
		}


		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);

		while(nota<0 || nota>10){
			nota=prompt("Error. Ingrese una nota del 1 al 10","Ingrese una nota");
			nota=parseInt(nota);
		}
		if(nota>5){
			contadorAlumnosAprobados++;
		}

		sexo=prompt("Ingrese su sexo");
		while(sexo!="f" && sexo!="m" && sexo!="nb"){
			sexo=prompt("Error. Ingrese un sexo valido. f(femenino), m(masculino), nb(no binario)","Ingrese su sexo");
		}
		switch(sexo){
			case "f":
				contadorFemenino++;
				//contadorFemenino=contadorFemenino +1
			break;
			case "m":
				contadorMasculino++;
			break;
			case "nb":
				contadorNoBinarios++;
			break;
		}
		if(alturaCentimetros>190 && sexo=="f"){
			contadorMujeresSuperioresA190Cm++;
		}

		nombre=prompt("Ingrese su nombre");
	
		contadorAlumnos++;

	}

	promedioAlturas=acumuladorAlturas/cantidadMaximaDeIteraciones;
	




}DIV I
Alan Magariños
e/ While 07


function mostrar() //Enunciado:Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

{
	var numeroIngreso;
	var respuesta;
	var suma;
	var promedio;
	var contador;
	
	suma=0;
	contador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
        suma=suma + numeroIngresado;
        contador= contador + 1;
		respuesta = confirm("Desea ingresar otro numero?");
	}
	promedio = suma/contador;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;
}
*/
/*
Ejercicio While 07 V2 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN, 


1ERA PARTE
    informar :
    a)Cuántas mujeres hay .
    b)Cuántos con fiebre y cuantos sin fiebre.
    c)el promedio de edad por sexo.
2da PARTE
    informar :
    d)el primer alumno aprobado
    e)el nombre y edad la máxima temperatura 
    f)la altura y nota  del no binario mas joven

3ra PARTE
    informar :
    g)el nombre de la mujer más alta de las que aprobó
    h)el porcentaje de  personas que desaprobaron sobre el total
    i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
*/

function mostrar()
{
	var alturaCentimetros;
	var temperatura;
	var edad;
	var sexo;
	var nota;
	var nombre;
	var cantidadMaximaDeIteraciones;
	var contadorAlumnos; 
	var promedioAlturas;
	var contadorMasculino;
	var contadorFemenino;
	var contadorNoBinarios;
	var contadorFiebre;
	var contadorSinFiebre;
	var acumuladorEdadF;
	var acumuladorEdadM;
	var acumuladorEdadNB;
	var promedioEdadM;
	var promedioEdadF;
	var promedioEdadNB;
	var banderaPrimerAprobado;
	
	var temperaturaBandera;
	var nombreTemperaturaMax;
	var temperaturaMaxima;
	var edadMaxTemp;
	var edadNB;
	var edadNBMinima;
	var alturaNb;
	var notaNBJoven;
	var banderaPrimerDesaH;
	var	nombrePrimeroHombreBajoDesa;
	var contadorDesaprobados;
	var nombreMAprobada;
	var alturaMujerAlta;

	alturaMujerAlta=0;
	temperaturaMaxima=0;
	banderaPrimerDesaH=true;
	temperaturaBandera=false;
	banderaPrimerAprobado=true;
	noBinariaBandera=false;
	contadorAlumnos=0;
	contadorMasculino=0;
	contadorFemenino=0;
	contadorNoBinarios=0;
	contadorAlumnosAprobados=0;
	acumuladorAlturas=0;
	contadorFiebre=0;
	contadorSinFiebre=0;
	cantidadMaximaDeIteraciones=5;
	acumuladorEdadF=0;
	acumuladorEdadM=0;
	acumuladorEdadNB=0;		
	contadorDesaprobados=0;
	respuesta=true;
	
	while(respuesta==true)
	{
		nombre=prompt("Ingrese su nombre");

		alturaCentimetros=prompt("Ingrese su altura");
		alturaCentimetros=parseInt(alturaCentimetros);
		
		while(alturaCentimetros<0||alturaCentimetros>250){
			alturaCentimetros=prompt("Error. Ingrese una altura mayor a 0 y menor a 250");
			alturaCentimetros=parseInt(alturaCentimetros);
		} // while de validacion
				
		edad=prompt("Ingrese su edad","Ingrese edad");
		edad=parseInt(edad);

		while(edad<17||edad>80){
			edad=prompt("Error. Ingrese una edad valida entre 18 y 80","Ingrese edad");
			edad=parseInt(edad);
		}
		temperatura=prompt("Ingrese su temperatura");
		temperatura=parseFloat(temperatura);

		while(temperatura<30||temperatura>52){
			temperatura=prompt("Error. Ingrese una temperatura mayor a 30° o menor a 52°","Ingrese su temperatura");
			temperatura=parseFloat(temperatura);
		}
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota=prompt("Error. Ingrese una nota del 1 al 10","Ingrese una nota");
			nota=parseInt(nota);
		}
		
		sexo=prompt("Ingrese su sexo");
		while(sexo!="f" && sexo!="m" && sexo!="nb"){
			sexo=prompt("Error. Ingrese un sexo valido. f(femenino), m(masculino), nb(no binario)","Ingrese su sexo");
		}
		switch(sexo){
			case "f":
				contadorFemenino++;
				acumuladorEdadF+=edad;
				if(alturaCentimetros>alturaMujerAlta && nota>3)
				{
					alturaMujerAlta=alturaCentimetros;
					nombreMAprobada=nombre;
				}
				break;
			case "m":
				contadorMasculino++;
				acumuladorEdadM+=edad;
				if(alturaCentimetros<160)
				{
					if(nota<4 && banderaPrimerDesaH==true)
					{
					nombrePrimeroHombreBajoDesa=nombre;
					banderaPrimerDesaH=false;
					}
				}
				break;
			default :
				contadorNoBinarios++;
				acumuladorEdadNB+=edad;
				if (edad<edadNBMinima|| noBinariaBandera==false)
		 		{
		 			edadNBMinima=edadNB;
		 			alturaNb=alturaCentimetros;
		 			notaNBJoven=nota
		 			noBinariaBandera=true;
		 		}
				break;
		}
		if(temperatura>37)
		{
			contadorFiebre++; //b.
		}
		else
			{
				contadorSinFiebre++;
			}
		if (nota>3)
		{
			if(banderaPrimerAprobado==true)
			{
				nombreAprobado=nombre;
				banderaPrimerAprobado=false;
			}
			contadorAlumnosAprobados++;
		}
		else
		{
			contadorDesaprobados++;
		}
		if (temperatura>temperaturaMaxima|| temperaturaBandera==false)
		 {
		 	temperaturaMaxima=temperatura;
		 	nombreTemperaturaMax=nombre;
		 	edadMaxTemp=edad;
		 	temperaturaBandera=true;
		 }
	contadorAlumnos++;
	respuesta=confirm("Desea continuar");
	}
	promedioEdadF=acumuladorEdadF/contadorFemenino;
	promedioEdadM=acumuladorEdadM/contadorMasculino;
	promedioEdadNB=acumuladorEdadNB/contadorNoBinarios;
	promedioAlturas=acumuladorAlturas/cantidadMaximaDeIteraciones;
	//a.Cuántas mujeres hay .
   	document.write("La cantidad de mujeres es: "+contadorFemenino+ "<br>");
	
	//b.b)Cuántos con fiebre y cuantos sin fiebre.
   	document.write("La cantidad de personas sin fiebre es: "+contadorSinFiebre+ "<br>");
	document.write("La cantidad de personas con fiebre es: "+contadorFiebre+ "<br>");
 	
 	//c.el promedio de edad por sexo.
	if(contadorFemenino>0)
	{
		document.write("El promedio de la edad de mujeres ingresadas es :"+promedioEdadF+ "<br>");
		//g. El nombre de la mujer más alta de las que aprobó
		if(nota>3)
		{
			document.write("El nombre de la mujer mas alta aprobada es: "+nombreMAprobada + "<br>");
		}		
	}
	
	if(contadorMasculino>0) 
	{
		document.write("El promedio de la edad de hombres ingresados es :"+promedioEdadM+ "<br>");
		if(banderaPrimerDesaH=false)//i. El nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
		{
			document.write("El nombre del primero hombre bajo y desaprobado es : "+ nombrePrimeroHombreBajoDesa+ "<br>");
		}
	}
	if (contadorNoBinarios>0)
	{
		document.write("El promedio de la edad de no binarios es: "+promedioEdadNB+ "<br>");
		//f. la altura y nota  del no binario mas joven 
		document.write("La altura del no binario mas joven es: "+alturaNb+" y su nota es: "+ notaNBJoven + "<br>");
	}
	porcentajeDesaprobados= contadorDesaprobados*100/contadorAlumnos;

	//2daParte
	//d. el primer alumno aprobado
	if(contadorAlumnosAprobados>0)
	{
	document.write("El primer alumno aprobado es: "+ nombreAprobado+ "<br>");
	}
    //e.el nombre y edad la máxima temperatura 
	document.write("El nombre de la persona con mas temperatura: "+nombreTemperaturaMax+" y su edad es: "+ edadMaxTemp + "<br>");
	//h. El porcentaje de  personas que desaprobaron sobre el total
	document.write("El porcentaje de alumnos desaprobados es del: "+porcentajeDesaprobados+" porciento de un total de "+ contadorAlumnos +" alumnos ingresados" + "<br>");
	
}
	

    
    