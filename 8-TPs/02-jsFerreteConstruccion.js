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
		
	valorUno = txtIdLargo.value;
	valorDos = txtIdAncho.value;
    
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
   
    alert("La longitud necesaria de material es "+(valorUno+valorDos)*6);
}
function Circulo () 
{
	var radio;
	var perimetroCircunferencia;

    radio = txtIdRadio.value;
    radio = parseInt(radio);
    perimetroCircunferencia = ((2*3.14)*radio);
    alert("La longitud necesaria de material es "+(perimetroCircunferencia)*3);
}
function Materiales () 
{
	var valorUno;
	var valorDos;
	var area;	
	var bolsaCementoNecesaria;
	var bolsaCalNecesaria;
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



    alert("La cantidad necesaria de materiales para cubrir el area es "+bolsaCementoNecesaria+" bolsas de cemento y "+ bolsaCalNecesaria+" bolsas de cal ");
}