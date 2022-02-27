/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto,
 el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 ) */
function mostrar()
{
var ingresoPeso;
var temperaturaAlmacenamiento;
var respuesta;
var marcaProducto;
var pesoMinimo;
var pesoMaximo;
var promedioPeso;
var contadorBajoCero;
var contadorProductos;
var contadorTempPar;
var banderaPeso;
var marcaProductoPesado;
var acumuladorPesoProductos;

acumuladorPesoProductos=0;
contadorBajoCero=0;
contadorProductos=0;
contadorTempPar=0;
banderaPeso=true;
respuesta=true;

while(respuesta==true)
	{
		marcaProducto=prompt("Ingrese marca de producto");

		ingresoPeso=prompt("Ingrese peso de producto, entre 1 y 100 ");
		ingresoPeso=parseInt(ingresoPeso);
		while(ingresoPeso<1||ingresoPeso>100)
		{
			ingresoPeso=prompt("ERROR...Ingrese peso valido de producto, entre 1 y 100 ");
			ingresoPeso=parseInt(ingresoPeso);
		}
		temperaturaAlmacenamiento=prompt("Ingrese temperatura de almacenamiento, entre -30 y 30");
		temperaturaAlmacenamiento=parseInt(temperaturaAlmacenamiento);
		while(temperaturaAlmacenamiento<-30||temperaturaAlmacenamiento>30)
		{
			temperaturaAlmacenamiento=prompt("ERROR...Ingrese temperatura valida de almacenamiento, entre -30 y 30");
			temperaturaAlmacenamiento=parseInt(temperaturaAlmacenamiento);
		}
		if(temperaturaAlmacenamiento<0)
		{//c) La cantidad de productos que se conservan a menos de 0 grados.
			contadorBajoCero++;
		}
		if(temperaturaAlmacenamiento%2==0)
		{//a) La cantidad de temperaturas pares.
			contadorTempPar++;
		}
		if(ingresoPeso<pesoMinimo||banderaPeso==true)
		{//f) El peso máximo y el mínimo.
			pesoMinimo=ingresoPeso;
		}
		if(ingresoPeso>pesoMaximo||banderaPeso==true)
		{//b) La marca del producto más pesado
			pesoMaximo=ingresoPeso;
			marcaProductoPesado=marcaProducto;
			banderaPeso=false;
		}
		acumuladorPesoProductos+=ingresoPeso;//d)promedio peso todos los productos.
		contadorProductos++
		respuesta=confirm("Desea continuar ingresando datos?");
	
	}
promedioPeso=acumuladorPesoProductos/contadorProductos;
//a) La cantidad de temperaturas pares.
document.write(" La cantidad de temperaturas par es :"+contadorTempPar+"<br>");
//b) La marca del producto más pesado
document.write(" La marca del producto mas pesado es :"+marcaProductoPesado+"<br>");
//c) La cantidad de productos que se conservan a menos de 0 grados.
document.write(" La cantidad de productos conservables bajo cero es :"+contadorBajoCero+ "<br>");
//d) El promedio del peso de todos los productos.
document.write(" El promedio del peso de todos los productos es :"+promedioPeso+ "<br>");
//f) El peso máximo y el mínimo.
document.write(" El peso maximo es :"+pesoMaximo+" y el peso minimo es "+pesoMinimo+ "<br>");
}








