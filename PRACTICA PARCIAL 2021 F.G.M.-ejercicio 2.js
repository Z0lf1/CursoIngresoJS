/* Parcial 2022 parte 2 

by GONZALO FABIAN MONTERO ARGUIBAY

2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
	var vendedor;
	var importe;
	var respuesta;

	var ventasJuan;
	var contadorJuan;
	var comisionJuan;
	var porcentajeJuan;

	var ventasPedro;
	var contadorPedro;
	var comisionPedro;
	var porcentajePedro;

	var ventasMaria;
	var contadorMaria;
	var comisionMaria;
	var porcentajeMaria;

	importe = 0;
	respuesta = true;
	ventasJuan = 0;
	contadorJuan = 0;
	comisionJuan = 0;
	porcentajeJuan = 0;
	ventasPedro = 0;
	contadorPedro = 0;
	comisionPedro = 0;
	porcentajePedro = 0;
	ventasMaria = 0;
	contadorMaria = 0;
	comisionMaria = 0;
	porcentajeMaria = 0;


	while (respuesta == true) {

		vendedor = prompt ("Ingrese el vendedor: Juan, Pedro o Maria.");
			while(vendedor != "Juan" && vendedor != "Pedro" && vendedor != "Maria") {
		            vendedor = prompt("Error... Los vendedores válidos son Juan, Pedro o Maria.");
		        }

		importe = prompt ("Ingrese el importe de la venta.");
		importe = parseInt(importe);
			while(isNaN(importe) || importe < 1 || importe > 10000)
				{
		            importe = prompt ("Error... reingrese un importe válido entre $1 y $10000.");
		            importe = parseInt(importe);
	            } 
	            
		switch (vendedor) {
		case "Juan":
			contadorJuan++;
			ventasJuan = ventasJuan + importe;
		break;

		case "Pedro":
			contadorPedro++;
			ventasPedro = ventasPedro + importe;
		break;

		case "Maria":
			contadorMaria++;
			ventasMaria = ventasMaria + importe;
		break; 
		}

		respuesta = confirm("¿Desea ingresar otra venta?");
	} //fin del while respuesta


	
	if (ventasJuan >= 500000) {
		porcentajeJuan = 10;
	} else {
		porcentajeJuan = 5;
	}

	if (ventasPedro >= 500000) {
		porcentajePedro = 10;
	} else {
		porcentajePedro = 5;
	}

	if (ventasMaria >= 500000) {
		porcentajeMaria = 10;
	} else {
		porcentajeMaria = 5;
	}
	

	comisionJuan = ventasJuan * porcentajeJuan / 100;
	comisionPedro = ventasPedro * porcentajePedro / 100;
	comisionMaria = ventasMaria * porcentajeMaria / 100;

	
	if (comisionJuan > comisionPedro && comisionJuan > comisionMaria) {
		maximaComision = "Juan";
	} else {
			if (comisionPedro > comisionJuan && comisionPedro > comisionMaria) {
				maximaComision = "Pedro";
			} else {
				maximaComision = "Maria";
			}
	}

	document.write("Juan vendió un total de: $" + ventasJuan + ", realizó un total de " + contadorJuan + " ventas y recibió por comisión un total de: $" + comisionJuan + " .<br>");
	document.write("Pedro vendió un total de: $" + ventasPedro + ", realizó un total de " + contadorPedro + " ventas y recibió por comisión un total de: $" + comisionPedro + " .<br>");
	document.write("Maria vendió un total de: $" + ventasMaria + ", realizó un total de " + contadorMaria + " ventas y recibió por comisión un total de: $" + comisionMaria + " .<br>");
	if (maximaComision == "Maria") {
	document.write("La vendedora con mayor comisión es "+ maximaComision + ".<br>");
	} else {
	document.write("El vendedor con mayor comisión es "+ maximaComision + ".<br>");
	}
	
}