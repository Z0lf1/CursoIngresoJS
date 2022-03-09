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
*/
/*
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas
vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite
la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje
son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/

function mostrar()
{
    var nombre;// (entre 3 y 10 caracteres)
    var edad;// ( mayor o igual a 12)
    var vacuna;// (“rusa”, “china”, “americana”) Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
    var dosis;// (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
    var sexo;//( “f” o “m” )
    var acumuladorRusa=0;
    var acumuladorEdadesRusa=0;
    var contadorRusa=0; 
    var promedioEdadRusa;   
    var respuesta=true;
    var contadorMaxoresAmericana=0;
    var contadorAmericana=0;
    var edadMaximaMujer;
    var nombreMujer;
    var vacunaMujer;
    var banderaEdadMaxima = false;
    var porcentajeAMayores;
    var porcentajeSegunda;
    var contadorSegunda=0;
    var contador=0;
    var contadorChina=0;
    var menosInoculada;
    while(respuesta==true)
    {
        nombre=prompt("Ingrese nombre");

        edad=prompt("Ingrese edad mayor o igual a 12");
        while(isNaN(edad)||edad<12)
        {
          edad=prompt("ERROR Ingrese edad mayor o igual a 12");
        }
        if (edad>11&&edad<18) 
        {//Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
            vacuna=prompt("Ingrese origen vacuna");     
            while(vacuna!="americana")
            {
                vacuna=prompt("Usted solo puede recibir la vacuna americana");        
            }
        }
        else 
        {
            vacuna=prompt("Ingrese origen vacuna: rusa, china o americana");     
            while(vacuna!="rusa"&&vacuna!="china"&&vacuna!="americana")
            {
                vacuna=prompt("Ingrese origen vacuna: rusa, china o americana");        
            }
        }
              
        dosis=prompt("Ingrese p en caso de ser la primer dosis o s en caso de ser la segunda dosis");     
        while(dosis!="p"&&dosis!="s")
        {
            dosis=prompt("ERROR Ingrese p en caso de ser la primer dosis o s en caso de ser la segunda dosis");         
        }

        sexo=prompt("Ingrese sexo f o m");
        while(sexo!="f"&&sexo!="m")
        {
           sexo=prompt("ERROR Ingrese sexo f o m");
        }
        switch (vacuna)
        {
            case "rusa":
            acumuladorEdadesRusa+edad;
            contadorRusa++;
            break;
            case "americana":
                //c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
                if(edad>17)
                {
                   contadorMaxoresAmericana++; 
                }
                contadorAmericana++;
            default:
            contadorChina++;
            break;
         }
         
    if(sexo=="f")
    {//b- Nombre y vacuna de la mujer con más edad
        if(edad > edadMaximaMujer || banderaEdadMaxima == false)
        {
            edadMaximaMujer = edad;
            nombreMujer=nombre;
            vacunaMujer=vacuna;
            banderaEdadMaxima = true;
        }
    }
    if (dosis=="s")
    {//d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
        contadorSegunda++;
    }

    contador++;
    respuesta=confirm("Desea hacer otro ingreso?");
    }// ACA TERMINA EL WHILE
    if(contadorChina < contadorAmericana && contadorChina < contadorRusa)
        {
            menosInoculada = "es China";
        }
        else
        {
            if(contadorAmericana < contadorRusa)
            {
                menosInoculada = "es Americana";
            }
            else
            {
                menosInoculada = "es Rusa";
            }
        }
    //c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
    porcentajeAMayores=contadorMaxoresAmericana*100/contadorAmericana;
    //a- Promedio de edad de los que se vacunaron con la rusa
    promedioEdadRusa =acumuladorEdadesRusa/contadorRusa;
    //d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
    porcentajeSegunda=contadorSegunda*100/contador;
    //e- Vacuna menos inoculada

document.write("Promedio de edad de los que se vacunaron con la rusa " + promedioEdadRusa + " % " +"<br>");
document.write("De la mujer con más edad el nombre es " + nombreMujer + " y la vacuna es" + vacunaMujer + "<br>");
document.write("De las personas que recibieron la vacuna americana que porcentaje son mayores de edad " + porcentajeAMayores + " %" +"<br>");
document.write("Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados " + porcentajeSegunda + " % " + "<br>");
document.write("La vacuna menos inoculada" + menosInoculada +"<br>");
}


