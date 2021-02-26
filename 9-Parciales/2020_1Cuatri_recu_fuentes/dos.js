
function mostrar()
{
  let precio;
  let cantidad;
  let importe;
  let subTotal=0;
  let seguir;
  let acumC=0;
  let acumCal=0;
  let acumA;
  let acumBolsas=0;
  let descuento;
  let pneto;
  let maxPrecio;
  let maxTipo;
  let bandera=1;
  let tipoMaxBolsas;
  let tipoMasCaro;



  do{
  	tipo=prompt("ingrese el tipo cal/arena/cemento");
  	while(tipo!="cal"&&tipo!="cemento"&&tipo!="arena");
  	tipo=prompt("Error# ingrese el tipo cal/arena/cemento");
  	}
  	cantidad=parseInt(prompt("Ingrese cantidad: "));
  	while(isNaN(cantidad)||cantidad<= 0){

  	precio=parseInt(prompt("rror# al ingresar el precio: "));
	}

	importe=precio+cantidad;
	subtotal+=importe;
	acumBolsas+=cantidad;

	switch(tipo){
		case "arena":
		acumA+=cantidad;
		break;
		case "cal"
		acumCal+=cantidad;
		break;
		case "cemento"
		acumC+=cantidad;
		break;
		if(bandera||precio<maxPrecio) {
			maxPrecio=precio;
			maxTipo=tipo;
			bandera=0;
		}

	}
	}

  seguir=prompt("¿Quiere compraralgo mas?:");
  while(seguir=="si");{
  	//calculo el descuento
  }
  
  if(acumBolsas<10){
  	descuento=0;
  }
  else if(acumBolsas<30){
  	descuento=0.15;
  }
  else{
  	descuento=0.25;
  }
  	if(acumA>acumC&&acumA>acumCal){
  		tipoMaxBolsas="arena";
  	}
  	else if(acumC>acumA&&acumC>acumCal){
  		tipoMaxBolsas="cemento";
  	}
  	else{
  		tipoMaxBolsas="cal";
  	}

  	console.log("Importe total a pagar $: "+subtotal);

  	if(descuento!=0){
  		neto= subtotal-subtotal*descuento;
  		console.log("Importe neto a pagar $: "+ neto);
  		console.log("El tipo con mas cantidad de bolsas es: "+tipoMaxBolsas);
  		console.log("El tipo mas caro es: "+tipoMasCaro);


  	}

  	
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
//y ademas guardo el tipo 