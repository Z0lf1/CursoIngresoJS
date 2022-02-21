
/*
DIV I
Alan Magariños
e/ While 06
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=6;
	acumulador=0;
	
	while (contador>1)
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
        contador = contador-1;
        acumulador=acumulador + numeroIngresado;
    }

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}
