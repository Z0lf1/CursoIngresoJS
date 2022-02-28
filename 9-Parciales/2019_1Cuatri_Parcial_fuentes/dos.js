/*Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un
mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
que sumados son xx kilos y el promedio de peso xx "
*/
function mostrar()
{
	var nombreA;
	var nombreB;
	var pesoA;
	var pesoB;
	var pesoSuma;
	var promedioPesos;


	nombreA= prompt("Ingrese el primer nombre");
	pesoA=prompt("ingrese el peso de "+nombreA);
	pesoA=parseInt(pesoA);
	while(isNaN(pesoA))
	{
		pesoA=prompt("Error...ingrese el peso de "+nombreA);
		pesoA=parseInt(pesoA);
	}
	
	nombreB= prompt("Ingrese el segundo nombre");
	pesoB=prompt("ingrese el peso de "+nombreB);
	pesoB=parseInt(pesoB);
	while(isNaN(pesoB))
	{
		pesoB=prompt("Error...ingrese el peso de "+nombreB);
		pesoB=parseInt(pesoB);
	}
	pesoSuma=pesoA+pesoB;
	promedioPesos=pesoSuma/2;
	mensaje="Ustedes se llaman "+nombreA+" y "+nombreB+", pesan "+pesoA+" y "+ pesoB+" kilogramos. ";
	mensaje+=" La suma de ambos es: "+pesoSuma+" y el promedio de peso: "+promedioPesos;
	alert(mensaje);
}