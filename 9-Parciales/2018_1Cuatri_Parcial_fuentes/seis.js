/*Alan Maga 
Div I
Enunciado:
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica.*/
function mostrar()
{
var ingresoHora;
var mensaje;


ingresoHora=document.getElementById('laHora').value;
ingresoHora=parseInt(ingresoHora);
while(ingresoHora<0&&ingresoHora>24)
{
	ingresoHora=document.getElementById('laHora').value;
	ingresoHora=parseInt(ingresoHora);
}
	switch(ingresoHora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde";
			break;
		default:
			mensaje="Es de noche, a dormir";
			/*if(ingresoHora>19 && ingresoHora<24)
			{
				mensaje="Es de noche, a dormir";
			}*/
			break;
	}
alert(mensaje);
}