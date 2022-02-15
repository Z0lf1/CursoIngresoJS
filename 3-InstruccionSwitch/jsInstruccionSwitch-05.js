/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
var horaDelDia;
var mensaje;
horaDelDia = document.getElementById('txtIdHora').value;
horaDelDia = parseInt(horaDelDia);
mensaje = "";

switch(horaDelDia){
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
   		 mensaje = "Es de mañana."; 
         break;     

}

alert(mensaje);

}