/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e
informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/
function mostrar()
{
	var letra;
	var ingresoNumero;
	var contadorNumeroPar;
	var contadorNumeroImpar;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var numeroMinimo;
	var numeroMaximo;
	var letraMinimo;
	var letraMaximo;
	var banderaNumero;

	contadorNumeroPar=0;
	contadorNumeroImpar=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;

	banderaNumero=true;
	respuesta=true;
	while(respuesta==true)
	{
		letra=prompt("ingrese una letra");//una letra 
	    ingresoNumero=prompt("ingrese un numero entre 100 y -100 incluidos ambos");
	    ingresoNumero=parseInt(ingresoNumero);
		while(ingresoNumero<-100||ingresoNumero>100)
		{//  un número entre -100 y 100 (validar)
			ingresoNumero=prompt("Error...ingrese un numero entre 100 y -100 incluidos ambos");
	    	ingresoNumero=parseInt(ingresoNumero);
		}
 		if (ingresoNumero%2==0)
 		 {//a) La cantidad de números pares.
 		 	contadorNumeroPar++;
 		 	if(ingresoNumero==0)
 		 	{//c) La cantidad de ceros.
 		 		contadorCeros++;
 		 	}
 		 }
		else
			{//b) La cantidad de números impares.
				contadorNumeroImpar++;
			}
		if(ingresoNumero>=1)
		{
			acumuladorPositivos+=ingresoNumero;
			contadorPositivos++;
		}
		else
		{
			if(ingresoNumero<0)
			{//e) La suma de todos los números negativos.
			acumuladorNegativos+=ingresoNumero;
			contadorNegativos++;
			}
		}
		if (ingresoNumero<numeroMinimo||banderaNumero==true)
		{//f) El número y la letra del máximo y el mínimo.
			numeroMinimo=ingresoNumero;
			letraMinimo=letra;
		}
		if(ingresoNumero>numeroMaximo||banderaNumero==true)
		{
			numeroMaximo=ingresoNumero;
			letraMaximo=letra;
			banderaNumero=false;
		}
	respuesta=confirm("Desea continuar?");
	}
//d) El promedio de todos los números positivos ingresados.
promedioPositivos=acumuladorPositivos/contadorPositivos;
if(contadorNumeroPar>0)
{
	document.write("La cantidad de números pares es: "+ contadorNumeroPar+"<br>");
	document.write("La cantidad de ceros es: "+ contadorCeros+"<br>");
}
if(contadorNumeroImpar>0)
{
	document.write("La cantidad de números impares es: "+ contadorNumeroImpar+"<br>");
}	
if(contadorPositivos>0)
{
	document.write("El promedio de todos los números positivos ingresados es: "+promedioPositivos+"<br>");	
}

	
document.write("La suma de todos los números negativos es "+ acumuladorNegativos+"<br>");
document.write("El número del máximo es: "+ numeroMaximo+" y su letra es: "+letraMaximo+"<br>");
document.write("El número del minimo es: "+ numeroMinimo+" y su letra es: "+letraMinimo+"<br>");
}



