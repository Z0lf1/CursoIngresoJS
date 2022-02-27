/*Alan Magariños Div I
Enunciado:
Bienvenidos.
Pedir por prompt el precio 
y el porcentaje de descuento,
mostrar el precio final con descuento por id. */
function mostrar()
{
 var precio;
 var descuento;
 var precioFinal;
 var mensaje;
 var descuentoAplicable;

 precio=prompt("ingrese precio");
 precio=parseInt(precio);
 while(isNaN(precio))
 {
 	precio=prompt("ingrese precio numericamente");
 	precio=parseInt(precio);
 }
 descuento=prompt("Ingrese % de descuento");
 descuento=parseInt(descuento);
 while(isNaN(descuento))
 {
 	descuento=prompt("Ingrese % de descuento");
 	descuento=parseInt(descuento);
 }
 descuentoAplicable=descuento/100;
 precioFinal=precio - precio * descuentoAplicable;
 elPrecioFinal.value=precioFinal;
}
