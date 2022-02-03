/* Magariños Alan DIV I 
TP 2 Ferrete Construccion
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var valorUno;
	var valorDos;
	var perimetro;
    var mensajeA;
    var requerimiento;

	valorUno = txtIdLargo.value;
	valorDos = txtIdAncho.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    perimetro= parseInt(perimetro);
    perimetro= ((valorUno + valorDos)*2);
    requerimiento = perimetro*3;
    mensajeA = "La longitud necesaria de alambre es " + requerimiento + " metros.";
    alert(mensajeA);
}
function Circulo () 
{
	var radio;
	var perimetroCircunferencia;
	var requerimiento;
	var mensajeA;
    radio = txtIdRadio.value;
    radio = parseInt(radio);
    perimetroCircunferencia = (2*(Math.PI)*(radio));
    requerimiento = ((perimetroCircunferencia.toFixed(2))*3);
    mensajeA = "La longitud necesaria de alambre es "+ requerimiento +" metros.";
    alert( mensajeA);
}
function Materiales () 
{
	var valorUno;
	var valorDos;
	var area;	
	var bolsaCementoNecesaria;
	var bolsaCalNecesaria;
	var mensajeA;
	
	valorUno = txtIdLargo.value;
	valorDos = txtIdAncho.value;
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    area = parseInt(area);
    area = valorUno * valorDos;
    bolsaCemento = parseInt(bolsaCementoNecesaria);
    bolsaCal = parseInt(bolsaCalNecesaria);
    bolsaCementoNecesaria = area * 2;
    bolsaCalNecesaria = area * 3;
    
    mensajeA = " La cantidad necesaria de materiales para cubrir el area es ";
    mensajeA += bolsaCementoNecesaria + " bolsas de cemento y "
    mensajeA += bolsaCalNecesaria+" bolsas de cal." 
    alert(mensajeA);
}