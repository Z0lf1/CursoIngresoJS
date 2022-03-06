/*
2. Un jugador de League of Legends tiene un fin de semana libre y va a jugar 15
partidas.
Para mejorar su jugabilidad, por cada partida jugada va a registrar:
- Modo de juego ("Normal", "Clasificatoria", "ARAM")
- Nombre del personaje que usó (“Vayne”,”Annie”,”Renata”)
- La cantidad de asesinatos. (No puede ser negativo)
- La cantidad de muertes. (No puede ser negativo)
- La cantidad de asistencias. (No puede ser negativo)
De lo registrado, al jugador le interesa lo siguiente:
a) El modo de juego más jugado.
b) De las partidas ARAM, el personaje con menos asistencias.
c) El promedio de muertes.
d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y
30 % ARAM.)
*/

function mostrar()
{
	var modoJuego;
	var personaje;
	var kills;
	var muertes;
	var asistencias;

	var control;
	var contadorNormal;
	var contadorClasif;
	var contadorARAM;
	var	assistsVayne;
	var assistsAnnie;
	var assistsRenata;
	var minAsistidor;
	var masJugado;
	var promedioMuertes;
	var totalMuertes;
	var porcentajeNormal;
	var porcentajeClasif;
	var porcentajeARAM;

	control = 0;
	contadorNormal = 0;
	contadorClasif = 0;
	contadorARAM = 0;
	assistsVayne = 0;
	assistsAnnie = 0;
	assistsRenata = 0;
	promedioMuertes = 0;
	totalMuertes = 0;
	porcentajeNormal = 0;
	porcentajeClasif = 0;
	porcentajeARAM = 0;

	while(control < 15)
   	{
	    modoJuego = prompt("Ingrese el Modo de Juego: Normal, Clasificatoria o ARAM.");
	    while(modoJuego != "Normal" && modoJuego != "Clasificatoria" && modoJuego != "ARAM")
		{
			modoJuego = prompt("Error... Ingrese un Modo de Juego válido: Normal, Clasificatoria o ARAM.");
		}

	    personaje = prompt("Ingrese el Personaje usado: Vayne, Annie o Renata.");
	    while(personaje != "Vayne" && personaje != "Annie" && personaje != "Renata")
		{
			personaje = prompt("Error... Ingrese un Personaje válido: Vayne, Annie o Renata.");
		}

		kills = prompt ("Ingrese la cantidad de kills.");
		kills = parseInt(kills);
		while(isNaN(kills) || kills < 0)
		{
			kills = prompt ("Error... reingrese un número válido.");
			kills = parseInt(kills);
		}

		muertes = prompt ("Ingrese la cantidad de muertes.");
		muertes = parseInt(muertes);
		while(isNaN(muertes) || muertes < 0)
		{
			muertes = prompt ("Error... reingrese un número válido.");
			muertes = parseInt(muertes);
		}

		asistencias = prompt ("Ingrese la cantidad de asistencias.");
		asistencias = parseInt(asistencias);
		while(isNaN(asistencias) || asistencias < 0)
		{
			asistencias = prompt ("Error... reingrese un número válido.");
			asistencias = parseInt(asistencias);
		}

		switch (modoJuego) {
			case "Normal":
			contadorNormal++;
			break;

			case "Clasificatoria":
			contadorClasif++;
			break;

			case "ARAM":
			contadorARAM++;
				switch (personaje) {
					case "Vayne":
					assistsVayne = assistsVayne + asistencias;
					break;

					case "Annie":
					assistsAnnie = assistsAnnie + asistencias;
					break;

					case "Renata":
					assistsRenata = assistsRenata + asistencias;
					break;
				}
			break;
		}

		if (contadorNormal > contadorClasif && contadorNormal > contadorARAM) {
			masJugado = "Normal";
		} else {
				if (contadorClasif > contadorNormal && contadorClasif > contadorARAM) {
					masJugado = "Clasificatoria";
				} else {
					masJugado = "ARAM";
				}
		}


		if (assistsVayne < assistsAnnie && assistsVayne < assistsRenata) {
			minAsistidor = "Vayne";
		} else {
				if (assistsAnnie < assistsVayne && assistsAnnie < assistsRenata) {
					minAsistidor = "Annie";
				} else {
					minAsistidor = "Renata";
				}
		}
		totalMuertes = totalMuertes + muertes;
		control++;
   	}


	promedioMuertes = totalMuertes / 15;
	porcentajeNormal = contadorNormal / 15 * 100;
	porcentajeClasif = contadorClasif / 15 * 100;
	porcentajeARAM = contadorARAM / 15 * 100;

	document.write("El Modo de Juego más jugado es " + masJugado + ".<br>");
	document.write("El personaje con menos asistencias en el modo ARAM es " + minAsistidor + ".<br>");
	document.write("El promedio de muertes es de " + promedioMuertes + " por partida.<br>");
	document.write("El porcentaje de partidas en Normal es " + porcentajeNormal + "%, el de partidas de Clasificatoria es " + porcentajeClasif +
		"% y el de partidas ARAM es "+ porcentajeARAM +"%.<br>");

}