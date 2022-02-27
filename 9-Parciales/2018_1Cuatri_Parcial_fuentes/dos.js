/* Alan Magariños Div I
Enunciado:
Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/
function mostrar()
{
  var nombre;
  var localidad;
  var mensaje;

  nombre=document.getElementById('elNombre').value;
  localidad=document.getElementById('laLocalidad').value;
  mensaje= "usted es: "+nombre+" y vive en la localidad de "+localidad;
  alert(mensaje);
}
