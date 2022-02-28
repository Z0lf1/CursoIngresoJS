/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos 
necesarios para un triángulo equilátero por prompt
 y que muestre el perímetro por alert.
*/
function mostrar()
{
var lado;
var perimetro;
var mensaje;

lado=prompt("Ingrese longitud del lado");
lado=parseInt(lado);
while(isNaN(lado))
{
	lado=prompt("Error...Ingrese longitud del lado");
	lado=parseInt(lado);
}
perimetro=lado+lado+lado;
mensaje="El perimetro del triangulo es: "+perimetro;
alert(mensaje);
}
