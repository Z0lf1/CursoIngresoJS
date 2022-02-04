/*
Magariños Alan DIV I 
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeBase;
    var porcentajeDescuento;
    var importeDescuento;

    importeBase = txtIdImporte.value;
    importeBase = parseInt(importeBase);
	porcentajeDescuento = importeBase * 0.25;
    
    importeDescuento = importeBase - porcentajeDescuento;
   
    txtIdResultado.value= importeDescuento; 
   
   }  
	