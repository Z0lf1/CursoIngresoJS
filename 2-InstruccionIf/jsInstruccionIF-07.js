/*
Magariños Alan DIV I 
IntroduccionIF 07
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
var edad;
var estadocivil;

edad = txtIdEdad.value;
edad = parseInt(edad);
estadocivil=document.getElementById('estadoCivil').value;	

if(edad<18 && estadocivil!="Soltero")
  
  {
    alert("Usted es muy pequeño para no ser soltero"); 
  }
 

}