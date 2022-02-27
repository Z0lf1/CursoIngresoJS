/*Alan Magariños Div I
Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
var ingresoPlaneta;
var sol;
var distancia
var mensajeCalor;
var mensajeFrio;
var mensaje;

mensajeFrio="acá hace más frio";
mensajeCalor="acá hace más calor";

ingresoPlaneta=prompt("Ingrese un planeta perteneciente al sistema solar");

switch(ingresoPlaneta)
 	{
 	case"mercurio":
	 	mensaje=mensajeCalor;
 		break;
 	case "venus":
 		mensaje=mensajeCalor;
 		break;
 	case "tierra":
		mensaje="Aca vivimos";
		break;
 	case "marte":
 		mensaje=mensajeFrio;
 		break;
 	case "jupiter":
 		mensaje=mensajeFrio;
 		break;
 	case "saturno":
 		mensaje=mensajeFrio;
 		break;
 	case "urano":
 		mensaje=mensajeFrio;
 		break;
 	case "neptuno":
 		mensaje=mensajeFrio;
 		break;
 	default:
 		mensaje="Este no es un concretamente un planeta o bien no pertenece al sistema";
 		break;
	}
	alert(mensaje);
}