/*
Magariños Alan DIV I 
IntroduccionIF 06
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
var edad;

edad = txtIdEdad.value;
edad = parseInt(edad);
	
if(edad<13)
{
        alert("La persona es un niño"); 
}
 else
{      
	if(edad>12 && edad<18)
        {
         alert("La persona es adolecente");     
        }
        else
        {
              if(edad>17)
              {	
               alert("La persona es mayor de edad");
              }
        }
}


}