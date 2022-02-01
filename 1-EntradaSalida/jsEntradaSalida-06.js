/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var valorUno;
	var valorDos;
	var resultado;

	valorUno = txtIdNumeroUno.value;
	valorDos = txtIdNumeroDos.value;
    valorUno= parseInt(valorUno);
    valorDos=parseInt(valorDos);
    
    resultado = valorUno + valorDos;
    
    alert("La suma es "+ resultado);
	
}

