/*Magariños Alan DIV I 
IntroduccionIF 09
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */

function mostrar()
{
	var numeroAleatorio;
	var mensaje;
	numeroAleatorio = Math.round(Math.random()*10);
	                //= Math.floor((Math.random() * 10) + 1);
	mensaje = "Numero aleatorio generado: "+numeroAleatorio
	alert(mensaje);	

}