/*
 Magariños Alan DIV I
 E sw 02

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
    Verano (21 de diciembre a 20 de marzo).
    Otoño (21 de marzo a 20 de junio).
    Invierno JULIO AGOSTO.
    Primavera (21 de septiembre a 20 de diciembre).
*/

function mostrar()
{
var mes;
var mensaje;
mes = txtIdMes.value;
mensaje = "";

switch(mes){
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
   		  mensaje ="Falta para el invierno"; 
         break;     
    case "Julio":
    case "Agosto":
   		 mensaje = "Abrigate que hace frio!!!";
         break;
    case "septiembre": 
    case "octubre":
    case "noviembre":
    case "Diciembre":
    case "Enero":
    	 mensaje = "Ya paso el frio, ahora el calor";
    	 break;
}

alert(mensaje);

}