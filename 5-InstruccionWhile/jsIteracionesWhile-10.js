/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10- De los positivos el mas grande.
11-de los negativos el mas chico.
*/

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCero;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var minimoNegativo;
	var maximoPositivo;
	
	banderaMaximo=;
	banderaMinimo=;
	respuesta=true;
	sumaNegativos=0;
	sumaPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCero= 0;
	contadorPares= 0;


	while(respuesta==true)
	{
		numeroIngresado=prompt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado>0)
		 {
		 	sumaPositivos+=numeroIngresado;
		 	contadorPositivos++
		 	if(numeroIngresado>maximoPositivo||contadorPositivos==1)
		 	{
		 		maximoPositivo= numeroIngresado;
		 	}
		 }
		 else
		 {
		 	if (numeroIngresado<0)
		 	 {
		 	 	sumaNegativos+= numeroIngresado;
		 	 	contadorNegativos++;
		 	 	if(numeroIngresado<minimoNegativo || contadorNegativos==1)
		 	 	{
		 	 		minimoNegativo=numeroIngresado;
		 	 	}
		 	 }
		 	 else
		 	 {
		 	 	contadorCero++;
		 	 }
		  }
		  if(numeroIngresado%2==0)
		  {
		  	contadorPares++;
		  }
		respuesta=confirm("desea continuar?");
	}//fin del while

	diferencia= contadorPositivos - contadorNegativos;
	document.write("la suma de negativos es :"+sumaNegativos+ "br");
	document.write("la suma de positivos es :"+sumaPositivos + "br");
	document.write("la cantidad de negativos es :"+cantidadNegativos+ "br");
	document.write("la la cantidad de positivos es :"+cantidadPositivos+ "br");
	document.write("la suma de negativos es :"+contadorPares+ "br");
	document.write("la suma de negativos es :"+contadorCeros+ "br");

	if(contadorPositivos>0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("la suma de negativos es :"+promedioPositivos "br");
	}
	else
	{
		document.write("No pudo calcular promedio de positivos <br>");
	}
	if(contadorNegativos>0)
	{
		promedioNegativos = sumaNegativos/contadorNegativos;
		document.write("la suma de negativos es :"+promedioNegativos+ "br");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos <br>");
	}
	document.write("la diferencia es: "+diferencia+ "br");
}//FIN DE LA FUNCIÓN