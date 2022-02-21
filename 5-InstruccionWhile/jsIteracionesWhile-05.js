/*DIV I
Alan Magariños
e/ While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("No es valido, intente denuevo: ");
	}
	document.getElementById('txtIdSexo').value=sexoIngresado;
}