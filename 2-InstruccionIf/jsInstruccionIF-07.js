/*
Alan Magariños  
DIV I 
Ejercicio 02 V3 A+B+C+D+E+F+G+H+I+J

 .Ejercicio 07 BIS V3(Realizar en los archivos  del ejercicio 07 del IF)
además de los datos ya ingresados , solicitar el nombre .
a. Si es menor de 13 , , mostrar el mensaje “feliz día”.
b. Si es adolescente el mensaje es “usted es adolexcente”)
b. i. Si tiene 17 años además mostrar el mensaje “último año!!!”
c. Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
c. i. Si tiene 33 años , además mostrar el mensaje “como cristo”
c. ii. Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
c. iii. Si tiene 88, además mostrar el mensaje “lindo número''
d. Si la edad es par , además mostrar , “sos par!!”.
e.Si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
f. Si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
g. Si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de     QUEEN’.
h. Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
i. Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
j. Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’



Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */


function mostrar()
{
	var edad;
	var estadoCivil;
    var mensaje;
	var mensajeDos;
	var mensajeTres;
	var mensajeCuatro;
    var nombre;
    var mensajeCivil;
    var mensajePequeño;
    var mensajeAlerta;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;

    mensajeDos ="";
    mensajeTres = "";
    mensajeCuatro = "";
    nombre = prompt("Ingrese su nombre: ");
    mensajeCivil = "";
    mensajePequeño = "";


	if (edad<13) //1.a.
 	{
 		mensaje = "Feliz Día. ";

 		if (nombre == "Ricardo") //2.f.
	    {
	    	mensajeCuatro = "Muy chiquito para ese nombre.  ";


	    }
 	}
 	else
  	{
  	 	if (estadoCivil == "Casado") //3.h.
  	 	{
  	 		mensajeCivil = "Casadx quiere casa. ";
  	 	}

  	 	if (edad<18)//1.b.
	 	{
	 		mensaje = "Usted es adolescente. ";

	 		if (estadoCivil == "Divorciado") //3.j.
	 		{
	 			mensajeCivil = "Toda una vida por delante. ";
	 		}

	 		if (edad==17)//1.bi.
	  		{
	      		mensajeDos = " Último año!!! ";

	    	    if (nombre == "Violeta") //2.e.
			    {
			    	mensajeCuatro = "Como el color!! ";
			    }
	    	}

		}

		else
		{
			if (edad>17) //1.c.
            {
                mensaje = "Tienes edad de laburar. ";

                if (estadoCivil == "Soltero") //3.h.
                {
                	mensajeCivil = "A salir. ";
                } 

                if (edad == 33) //1.c.i.
                {
                    mensajeDos = "Como Cristo. ";
                }
                else 
                {
                    if (edad > 60) //1.c.ii.
                    {
                        mensaje = "A jubilarse. ";


                 	if (edad == 88) //1.c.iii.
                 	{
                 		mensajeDos = "Lindo número. ";
                 	}
                 	if (nombre == "Alfredo") //2.g.
					    {
					    	mensajeCuatro = "Como el de QUEEN ";
					    }

                    }


                }

            }
		}
	

	}
    
    if (edad%2==0) //1.d.
    {
    	mensajeTres = "Es par. ";
    }

	
 	 mensajeAlerta = mensaje + mensajeDos + mensajeTres + mensajeCuatro + mensajeCivil;

	 	alert(mensajeAlerta);
    

}