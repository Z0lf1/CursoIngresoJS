/*
Magariños Alan DIV I 
TP 1 Ferrete facturación
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var valorFinal;
	var mensajeA;
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorFinal= (valorUno+valorDos+valorTres)
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    valorFinal = parseInt(valorUno+valorDos+valorTres);
    mensajeA ="El valor de la suma es "+ valorFinal
    alert(mensajeA);
}
function Promedio () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var valorPromedio;
	var mensajeA;
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    valorPromedio = parseInt(valorPromedio);
    valorPromedio = ((valorUno+valorDos+valorTres)/3);
    mensajeA ="El valor promedio es "+valorPromedio;
    alert(mensajeA);
}
function PrecioFinal () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var sumaValores;
    var valorImpuesto;
    var valorFinal;
    var mensajeA;
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    sumaValores=(valorUno+valorDos+valorTres);
    valorImpuesto = parseInt(sumaValores) * 0.21;
    valorFinal = parseInt(sumaValores) + valorImpuesto;
    mensajeA = "El valor final es "+valorFinal
    alert(mensajeA);
}