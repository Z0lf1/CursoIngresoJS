/* Magariños Alan DIV I 
IntroduccionIF 10
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var notas;
	var mensaje;
	notas = Math.floor((Math.random() * 10) + 1);
	
	mensaje = "Tu calificacion es "+ notas 
if(notas<4)
{
        alert( mensaje+ " Vamos, la proxima se puede"); 
}
 else
{      
	if(notas<9)
        {
         alert(mensaje+ " APROBÓ");     
        }
        else
        {
              alert(mensaje + " EXCELENTE")
        }
}


}