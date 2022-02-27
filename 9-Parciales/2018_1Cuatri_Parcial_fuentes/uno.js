/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
 var altoRectangulo;
 var anchoRectangulo;
 var perimetro;
 var mensaje;
 
 altoRectangulo=prompt("ingrese longitud para el alto del rectangulo");
 altoRectangulo=parseInt(altoRectangulo);
while(isNaN(altoRectangulo))
{
	altoRectangulo=prompt("ingrese longitud para el alto del rectangulo");
	altoRectangulo=parseInt(altoRectangulo);
}

 anchoRectangulo=prompt("ingrese longitud para el ancho del rectangulo");
 anchoRectangulo=parseInt(anchoRectangulo);
while(isNaN(anchoRectangulo))
{
	anchoRectangulo=prompt("ingrese longitud para el ancho del rectangulo");
 	anchoRectangulo=parseInt(anchoRectangulo);
}
perimetro=anchoRectangulo*2+altoRectangulo*2;
mensaje="El perimetro del rectangulo será"+perimetro;
alert(mensaje);
}
