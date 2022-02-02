/*
Magariños Alan DIV I 
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importeSueldoBase;
    var porcentajeSueldo;
    var importeSueldoAumento;

    importeSueldoBase = txtIdSueldo.value;
    importeSueldoAumento = txtIdResultado.value; 	
	
	porcentajeSueldo = parseInt(importeSueldoBase) * 0.10;
    
    importeSueldoAumento = parseInt(importeSueldoBase) + porcentajeSueldo;
   
    document.getElementById('txtIdResultado').value= importeSueldoAumento; 
   }
