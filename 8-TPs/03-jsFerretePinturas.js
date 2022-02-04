/* Magariños Alan DIV I 
TP 3 Ferrete Pinturas
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var ingresoGrados;
    var valorCel;
    var mensajeA;
	ingresoGrados=txtIdTemperatura.value;
    ingresoGrados=parseInt(ingresoGrados);
    valorCel = ((ingresoGrados - 32) *(5/9));
    mensajeA = ingresoGrados + " grados Fahrenheit son "+ valorCel + " grados centígrados"
    alert( mensajeA);
    
}

function CentigradosFahrenheit () 
{
	var ingresoGrados;
    var valorFar;
	ingresoGrados=txtIdTemperatura.value;
    ingresoGrados=parseInt(ingresoGrados);
    valorFar = ((ingresoGrados *(9/5))+32);
    alert( ingresoGrados + " grados centígrados son "+ valorFar + " grados Fahrenheit ");
}
