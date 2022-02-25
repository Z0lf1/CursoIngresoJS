/*
DIV I
Alan Magariños
e/ While 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngreso;
	var respuesta;
	var suma;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;
 while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
        if(numeroIngresado>=0)
        {	
        	sumaPositivos=sumaPositivos + numeroIngresado;
        }
        else {
        		multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
        	 }
        respuesta = confirm("Desea ingresar otro numero?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN