/*
Magariños Alan DIV I 
IntroduccionIF 05
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
var edad;

edad = txtIdEdad.value;
edad = parseInt(edad);
/*tambien aplicable
if(!(edad>17 || edad<13)*/	
if(edad>17 || edad<13)
{
        alert("La persona no es adolescente"); 
}

}