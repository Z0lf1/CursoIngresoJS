/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabon" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo
 y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
    let control;
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;

    let alcoholMinimo;//a)
    let cantidadAlcohol;
    let fabricanteAlcoholBarato;
    let banderaAlcohol;
    banderaAlcohol= false;
    
    let contadorJabon;//b)
    let contadorAlcohol;
    let contadorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let acumuladorBarbijo;
    let promedio;
    let tipoConMasCantidad;

    contadorJabon= 0;
    contadorAlcohol= 0;
    contadorBarbijo= 0;
    acumuladorJabon= 0;
    acumuladorAlcohol= 0;
    acumuladorBarbijo= 0;

    control= 0;

    while(control < 5)//while general
    {
        tipo= prompt("Ingrese el tipo de producto barbijo, jabon o alcohol");
        
        while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
        {
            tipo= prompt("Error.. reingrese el tipo de producto barbijo, jabon o alcohol");
        }

        precio= prompt ("Ingrese el precio entre: 100 y 300");
        precio= parseInt(precio);

        while(isNaN(precio) || precio < 100 || precio > 300)
        {
            precio= prompt ("Error.. reingrese el precio entre 100 y 300");
            precio= parseInt(precio);
        }

        cantidad= prompt("Ingrese la cantidad");
        cantidad= parseInt(cantidad);

        while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
        {
           cantidad= prompt("Error.. reingrese la cantidad");
           cantidad= parseInt(cantidad);
        }

        marca= prompt("Ingrese la marca");

        fabricante= prompt("Ingrese el fabricante");
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        if (tipo == "alcohol")
        {   acumuladorAlcohol+= cantidad;
            contadorAlcohol++;
            if (precio < alcoholMinimo || banderaAlcohol == false) 
            {
                alcoholMinimo= precio;
                cantidadAlcohol= cantidad;
                fabricanteAlcoholBarato= fabricante;
                banderaAlcohol= true;
            }
        }
        else
        { 
	        if(tipo == "jabon")
            {
	        	acumuladorJabon+= cantidad;
	            contadorJabon++;
	        }
	        else
	        {
	        	acumuladorBarbijo+= cantidad;
	            contadorBarbijo++;
	        }
    	}
    	control++;
    }//fin del while general*
    if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
  	{
  	  	promedio = acumuladorAlcohol/contadorAlcohol;
  	  	tipoConMasCantidad = "alcohol";
  	}
  	else
  	{
  		if (acumuladorJabon>acumuladorBarbijo)
  		{
  			promedio = acumuladorJabon/contadorJabon;
  	  		tipoConMasCantidad = "jabon";
  		}
  		else
  		{
  			promedio = acumuladorBarbijo/contadorBarbijo;
  	  		tipoConMasCantidad = "barbijo";
  		}
  	}
  	if(contadorAlcohol>0)
  	{
  		document.write("El alcohol mas economico es :"+alcoholMinimo+ "<br>");
		document.write( "la cantidad de unidades "+ cantidadAlcohol+ "<br>");
		document.write("el fabricante es: "+fabricanteAlcoholBarato+ "<br>");
	}
	document.write("el tipo con mas unidades es: "+tipoConMasCantidad+ " el promedio es "+ promedio+"<br>");//.b
	document.write("La cantidad de jabones es: "+acumuladorJabon+ "<br>"); //.c
}	
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

/*
Ejercicio 1

El laboratorio Rossi necesita desarrollar un programa que permita obtener algunos datos estadísticos
 sobre las muestras de sangre que recibe el sector de "Derivaciones", se sabe que dicho sector recibe:
Tipo de muestra: "Sangre", "Orina", y "Otros" (validar)
Cantidad de tubos, (validar, no pueden ser menos de 3 tubos y no más de 7 tubos de muestras)
Procedencia de las muestras: Argerich, Duran, Fernández, Rapela (validar)
Precio de la prestación: (validar valor mínimo 10.000 y valor máximo 55.000)
Se necesita saber:
1) Del primer ingreso: tipo de muestra, precio y su procedencia
2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
3) El promedio de dinero ganado en total
4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas y toca pagar
 ingresos brutos del 25% y si supera los 750.000 es 40%

ACLARACION: En ningún momento sabemos cuántos ingresos de muestras pueden ingresar*/

function mostrar()
{


  var muestraTipo; //Sangre/Orina/Otos
  var cantidadTubos;//n>2 && n<8
  var origen; //Argerich/Duran/Fernandez/Rapela
  var costo;//de 10000 a 55000
  var contadorIngresos;
  var acumuladorCosto;
  var promedio;
  var porcentajeVariable;
  var porcenAFI;
  var valorFInal;

  var primeraMuestra;
  var costoPrimero; 
  var origenPrimero;

  var costoQuinto;
  var cantidadTubosQuinto;

  var costoMasCaro;
  var masCaroTubos;
  var masCaroOrigen;
  var masCaroMuestraTipo;

  banderaCosto=true;
  contadorIngresos=0;
  acumuladorCosto=0;
  respuesta=true;

  while(respuesta==true)
  {
    muestraTipo=prompt("Declare si la muestra es de orina, sangre u otros");
    while(muestraTipo!=sangre && muestraTipo!=orina && muestraTipo!=otros)
    {
      muestraTipo=prompt("Error, declare un tipo de muestra valida, ya sea sangre, orina u otros");
    }

    cantidadTubos= prompt("Declare la cantidad de tubos correspondiente");
    cantidadTubos=parseInt(cantidadTubos);
    while(cantidadTubos<3||cantidadTubos>7)
    {
      cantidadTubos= prompt("Error, declare la cantidad de tubos correspondiente entre 3 y 7 tubos");
      cantidadTubos=parseInt(cantidadTubos);
    }

    origen= prompt("Declare procedencia de las muestras siendo las opciones ar para Argerich, du para Duran, fer para Fernandez y ra para Rapela");
    while(origen!=ar && origen!=du && origen!=fer && origen!=ra)
    {
      origen= prompt("Error declare una procedencia valida de las muestras siendo las opciones ar para Argerich, du para Duran, fer para Fernandez y ra para Rapela");
    }

    costo=prompt("Ingrese el costo del servicio con un valor no inferior a 10000 o que supere los 55000");
    costo=parseInt(costo);
    while(isNaN(costo)||costo<10000||costo>55000
    {
      costo=prompt("Error ingrese un costo valido del servicio con un valor no inferior a 10000 o que supere los 55000");
      costo=parseInt(costo);
    }

    acumuladorCosto+=costo;  
    contadorIngresos++;
    switch(contadorIngresos)
      {
       case 1:
          primeraMuestra=muestraTipo;
          costoPrimero= costo; 
          origenPrimero= origen;
       break; 
       case 5:
          costoQuinto= costo;
          cantidadTubosQuinto= cantidadTubos;
       break;
      }
    if (costo>costoMasCaro|| banderaCosto==true)
    {
      costoMasCaro=costo;
      masCaroTubos=cantidadTubos;
      masCaroOrigen=Origen;
      masCaroMuestraTipo=muestraTipo;
      banderaCosto=false;
    }
    respuesta = confirm("Desea ingresar más?");
  }
  promedio=acumuladorCosto/contadorIngresos;
  if(acumuladorCosto>500000)
  {
    porcenAFI=25;
    if(acumuladorCosto>750000)
    {
      porcenAFI=40;
    }
  }
    porcentajeVariable = acumuladorCosto * porcenAFI/100);
    valorFInal =acumuladorCosto + porcentajeVariable;

    if(contadorIngresos>0)
    {
      document.write("Del primer ingreso el tipo de muestra fue: "+primeraMuestra+", su precio fue de: "+costoPrimero+" y su procedencia es: "+origenPrimero+ "br");
      if( contadorIngresos>4)
      {
        document.write("Del quinto ingreso el el precio fue: "+costoQuinto+" y su cantidad de tubos es de: "+cantidadTubosQuinto+ "br");
      }
    }
}

1) Del primer ingreso: tipo de muestra, precio y su procedencia
2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
3) El promedio de dinero ganado en total
4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas y toca pagar
 ingresos brutos del 25% y si supera los 750.000 es 40%
