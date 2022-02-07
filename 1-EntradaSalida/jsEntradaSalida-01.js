/*
Magariños Alan DIV I 
tp 02 sabados
La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué cantidad de materiales se necesita para la fabricación de distintos juguetes.

COMETA: 

AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores

Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S

Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y
los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia.
La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas.
Tener en cuenta que los valores de entrada están expresados en Cms.

*/

function mostrar()
{

var ingresoDiametroMayor;
var ingresoDiametroMenor;
var cantidad;
var catMenor;
var catMayor;
var ladosMayores;
var ladosMenores;
var perimetroCometa;
var areaCometa;
var colaCometa;
var consumoVarillasUnidad;
var consumoPapelUnidad;
var consumoFinalVarillas;
var consumoFinalPapel;
var mensaje;

ingresoDiametroMayor = parseFloat(prompt("Ingrese diametro mayor en cm"));
ingresoDiametroMenor = parseFloat(prompt("ingrese diametro menor en cm"));
cantidad = parseInt(prompt("¿Cuántas cometas desea?"));
catMenor = parseFloat(ingresoDiametroMenor/2); 
catMayor = parseFloat(ingresoDiametroMayor-catMenor);
ladosMenores = Math.sqrt(Math.pow(catMenor,2)+ Math.pow(catMenor,2));
ladosMayores = Math.sqrt(Math.pow(catMayor,2) + Math.pow(catMenor,2));

perimetroCometa = (ladosMayores+ladosMenores)*2;
areaCometa = (ladosMayores*ladosMenores)/2;
colaCometa = (areaCometa*10)/100 ;

consumoVarillasUnidad = ingresoDiametroMayor+ingresoDiametroMenor+perimetroCometa;
consumoPapelUnidad = areaCometa+colaCometa;
consumoFinalVarillas = (consumoVarillasUnidad*cantidad)/100;
consumoFinalPapel = (consumoPapelUnidad*cantidad)/100;

mensaje = "Para la cantidad de "+cantidad+" cometas, necesitará: ";
mensaje += consumoFinalVarillas.toFixed(2)+" mt de varillas y ";
mensaje += consumoFinalPapel.toFixed(2)+" m² de papel entre cuerpo y cola de cometa.";
mensaje += " Si quiere realizarlo de dos colores, necesitará: ";
mensaje += consumoFinalPapel.toFixed(2)/2+" m² de cada color.";

alert(mensaje);
}


    
    
   
   
   