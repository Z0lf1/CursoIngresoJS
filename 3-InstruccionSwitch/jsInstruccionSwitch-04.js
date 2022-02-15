/*Magariños Alan DIV I
 E sw 04
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.Febrero
si tiene 30 días.Tienen 30 días: Abril, junio, septiembre y noviembre.
si tiene 31 días.Tienen 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre.
*/

function mostrar()
{
var mes;
var mensaje;
mes = document.getElementById('txtIdMes').value;
mensaje = "";

switch(mes){
    case "Febrero":      
        mensaje = "Este mes tiene 28 días";
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        mensaje = "Este mes tiene 30 días";
        break;
    default:
        mensaje = "Este mes tiene 31 días";
  }

alert(mensaje);

}