/*
Magariños Alan DIV I 
E/S 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

//Se piden tres nombre de producto, y los precios de cada  producto ingresado,
// sacar el precio bruto (la suma de los tres sin impuestos), el promedio de los
// precios y el precio final total más iva (21%), pedir un porcentaje de descuento 
//y aplicarlo al precio final, mostrar todos 
//los datos calculados e ingresados por alert. (solo un alert en el código)
function mostrar()
{
	var productoUno;
	var productoDos;
	var productoTres;
	
	var valorProductoUno;
	var valorProductoDos;
	var valorProductoTres;
    var precioBruto;
    var promedio;
    var impuestoAplicar;
    var valorPostImpuesto;
    var descuentoAAplicar;
    var descuentoAplicado;
   
	productoUno = prompt("Ingrese primer producto");
	valorProductoUno = prompt("Ingrese valor de "+ productoUno);
	productoDos = prompt("Ingrese segundo producto");
	valorProductoDos = prompt("Ingrese de "+ productoDos);
	productoTres = prompt("Ingrese tercer producto");
    valorProductoTres = prompt("Ingrese valor "+ productoTres);
	descuentoAAplicar =prompt("ingrese descuento aplicable");
	
	valorProductoUno = parseFloat(valorProductoUno);
	valorProductoDos = parseFloat(valorProductoDos);
	valorProductoTres = parseFloat(valorProductoTres);
    descuentoAAplicar = parseFloat(descuentoAAplicar);
    impuestoAplicar = parseFloat(impuestoAplicar);
    precioBruto = valorProductoUno+valorProductoDos+valorProductoTres;
    promedio= precioBruto/3;
    
    impuestoAplicar = parseFloat(precioBruto) * 0.21;
    valorPostImpuesto = parseFloat(precioBruto) + impuestoAplicar;
    descuentoAAplicar = valorPostImpuesto * 0.25;
    descuentoAplicado =valorPostImpuesto - descuentoAAplicar;
    mensaje="El valor de su compra en bruto es: $"+ precioBruto;
	mensaje+=" con un valor promedio de: $"+promedio; 
	mensaje+=" Posterior a la aplicacion de impuestos es: $"+valorPostImpuesto;  
	mensaje+=" Aplicando un descuento de "+descuentoAAplicar+" alcanza la suma de $";
	mensaje+= descuentoAplicado;
	alert(mensaje);

	}

    
    
   
   
   