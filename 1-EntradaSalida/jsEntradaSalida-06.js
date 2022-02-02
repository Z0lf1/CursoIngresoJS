/*
Magariños Alan DIV I 
E/S 06
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
    valorDos= parseInt(valorDos);
    
    alert("La suma es "+(valorUno+valorDos));
    
    //Esta es otra forma de resolver el mismo problema
    //resultado= valorUno+valorDos;
    //alert("La suma es "+ resultado);
	
}

