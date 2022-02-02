/*
Magariños Alan DIV I 
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var valorUno;
	var valorDos;
	var resultado;
	valorUno = txtIdNumeroUno.value;
	valorDos = txtIdNumeroDos.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    
    resultado = valorUno + valorDos;
    
    alert("El resultado de la suma es "+ resultado);
		
}

function restar()
{
	var valorUno;
	var valorDos;
	var resultado;
	valorUno = txtIdNumeroUno.value;
	valorDos = txtIdNumeroDos.value;
    valorUno= parseInt(valorUno);
    valorDos=parseInt(valorDos);
    
    resultado = valorUno - valorDos;
    
    alert("El resultado de la resta es " + resultado);
}

function multiplicar()
{ 
	var valorUno;
	var valorDos;
	var resultado;
	valorUno = txtIdNumeroUno.value;
	valorDos = txtIdNumeroDos.value;
    valorUno= parseInt(valorUno);
    valorDos=parseInt(valorDos);
    
    resultado = valorUno * valorDos;
    
    alert("El resultado la multiplicacion es "+ resultado);
}

function dividir()
{
	var valorUno;
	var valorDos;
	var resultado;
	valorUno = txtIdNumeroUno.value;
	valorDos = txtIdNumeroDos.value;
    valorUno= parseInt(valorUno);
    valorDos=parseInt(valorDos);
    
    resultado = valorUno / valorDos;
    
    alert("El resultado de la divicion es "+ resultado);
}


