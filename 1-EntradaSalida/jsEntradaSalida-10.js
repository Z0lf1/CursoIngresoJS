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

    importeDescuento = txtIdResultado.value; 	
	
	porcentajeDescuento = parseInt(importeBase) * 0.25;
    
    importeDescuento = parseInt(importeBase) - porcentajeDescuento;
   
    document.getElementById('txtIdResultado').value= importeDescuento; 
   
   }


   
	