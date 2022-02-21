/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero = false;
	respuesta=true;
	while(respuesta==true)
	{
		numeroIngresado= prompt("ingrese numero:  ");
		numeroIngresado = parseInt(numeroIngresado);
		
			if(numeroIngresado>maximo || banderaDelPrimero == false) 
			{
				maximo = numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo || banderaDelPrimero == false) 
			{
				mínimo = numeroIngresado;
				banderaDelPrimero=true;
			}
		respuesta = confirm("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN