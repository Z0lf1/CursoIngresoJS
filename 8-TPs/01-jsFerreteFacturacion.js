/*
Magariños Alan DIV I 
TP Ferrete facturación
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
	
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    alert("El valor de la suma es "+(valorUno+valorDos+valorTres));
}
function Promedio () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    alert("El valor promedio es "+(valorUno+valorDos+valorTres)/3);
}
function PrecioFinal () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var sumaValores;
    var valorImpuesto;
    var valorFinal;
	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
    valorTres = txtIdPrecioTres.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);
    sumaValores=(valorUno+valorDos+valorTres);
        	
	valorImpuesto = parseInt(sumaValores) * 0.21;
    
    valorFinal = parseInt(sumaValores) + valorImpuesto;
   
    alert("El valor final es "+valorFinal);
}