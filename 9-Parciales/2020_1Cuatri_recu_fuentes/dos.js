
/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
Curso de ingreso UTN FRA*/
function mostrar()
{
	var productoIngresado;
	var cantidadDeBolsas;
	var precioPorBolsa;
	var contadorDeBolsas;
	var importeTotal;
	var descuento;
	var importeTotalDescuento;







	continuar= "si";
	//descuento de bolsas
	contadorDeBolsas=0;






	while(continuar=="si")
	{
		productoIngresado=prompt("Ingrese el producto arena-cal- cemento");

		while(isNaN(productoIngresado)==false || productoIngresado !="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
		{
		productoIngresao=prompt("E# Ingrese el producto  nuevamente arena-cal- cemento");
		}

		cantidadIngresada=prompt("Ingrese la cantidad requerida");
				cantidadIngresada=parseInt(cantidadIngresada);

				while(isNaN(cantidadIngresada)==true || cantidadIngresada <1)
				{
				cantidadIngresada=prompt("E# Ingrese una cantidad valida");
				cantidadIngresada=parseInt(cantidadIngresada)
				}

        
				precioPorBolsa=prompt("Ingrese el precio");
				precioPorBolsa=parseInt(precioPorBolsa);

				while(isNaN(precioPorBolsa)==true || precioPorBolsa <1)
				{
				precioPorBolsa=prompt("E# Ingrese el precio");
				precioPorBolsa=parseInt(precioPorBolsa);
				}


				contadorDeBolsas= contadorDeBolsas+cantidadDeBolsas;
				//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
               //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
				if(contadorDeBolsas>10)
				{
					descuento=15;
				}

				else
				{
					if(contador>30)
					{
						descuento=30;
					}
					else
					{
						descuento=0;
					}

				}




	}//fin while
	//punto a)
	importeTotal=precioPorBolsa*cantidadDeBolsas;
	console.log("El importe total a pagar es: "+importeTotal);
	//b)
	importeTotalDescuento=importeTotal-(importeTotal*descuento/100);
	console.log("el importe total es:" +importeTotal+ "con un descuento de: "+descuento+ "el importe final es: "+importeTotalDescuento);
		

  	
}//fin

//1-declaracion de variables (tipo,cantidad,precio,importe a pagar,descuento, seguir, importebruto e importe neto, acumulador de bolsas para cada,)
//2-generar bucle del tipo mientras el usuario quiera
//aca va el codigo que se ejecuta en cada interaccio
//3-pido el tipo
//3-1-valido el tipo
//4-pido cantidad
//4-1-valido cantidad
//5-pido precio
//5-1-valido precio
//6-acumulo cantidad de bolsas
//7-acumulo importes calculo impoorte  precio*lacantidad de bolsas y acumulo en el bruto
//acumulo el importe bruto 
//8-genero un bloque para cada bloque de descuento (if else como el de las lamparas) y calculo el descuento
//el informe va fuera del bucle--> a) importe a pagar =el precio*la cantidad
//9-genero un bloque por cada tipo (arena,cal cemento)shich y acumulo cantidades por cada tipo
//generar un bloque al q entro en la primer interaccion y otro donde entro en las restantes
//en la primer interaccion guado como mayor precio el precio de este 