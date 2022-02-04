/* Magariños Alan DIV I 
TP 3 Ferrete Pinturas
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
   var ingresoGrados;
   var convercionGrados;
   var mensajeA;
   
   ingresoGrados = txtIdTemperatura.value;
   ingresoGrados = parseInt(ingresoGrados);
   convercionGrados = (ingresoGrados-32) * 5/9;
   
   mensajeA = ingresoGrados +" grados Fahrenheit son "; 
   mensajeA+= convercionGrados.toFixed(2) + " grados Centigrados";

   alert(mensajeA);
    
    
}

function CentigradosFahrenheit () 
{
	var grados;
    var conversion;
    var mensaje;

    grados = txtIdTemperatura.value;
    grados = parseInt(grados);
    conversion = ((grados * 9/5) +32);

    mensaje = grados + " grados centigrados son ";
    mensaje += conversion.toFixed(2) + " grados fahrenheit";

    alert(mensaje);
   
}
