/*
Enunciado:
Bienvenidos.
Pedir por prompt el precio y
 el porcentaje de descuento, mostrar el precio final con descuento por id.

Curso de ingreso UTN FRA
*/

function mostrar()
{
 var precio;
 var descuentoPrecio;
 var porcentaje;

precio=prompt("ingrese precio");
precio=parseInt(precio);
while(isNaN(precio))
{
	precio=prompt("ingrese precio");
	precio=parseInt(precio);
}
porcentaje=prompt("ingrese porcentaje");
porcentaje=parseInt(porcentaje);
while(isNaN(porcentaje))
{
	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);
}
	descuentoPrecio=precio-precio*porcentaje/100;

	elPrecioFinal.value=descuentoPrecio;
}
