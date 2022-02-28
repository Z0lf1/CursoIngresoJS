/*
Enunciado:
Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.
*/

function mostrar()
{
 var ingresoDia;
 var mensaje;

 ingresoDia=prompt("Ingrese un dia de la semana");
 switch(ingresoDia)
 {
 	case "lunes":
 	case "martes":
 	case"miercoles":
 	case"jueves":
 	case "viernes":
 	mensaje= "a trabajar";
 	break;
 	case "sabado":
 	case "domingo":
 	mensaje="Buen finde";
 	break;
 	default:
 	mensaje="No es un dia valido";
 }

alert(mensaje);
}
