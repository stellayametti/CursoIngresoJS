//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
///la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) del tipo con mas unidades el promedio por compra
//c) Cuántas unidades de jabones hay en total

function mostrar()
{
	let productoIngresado;
	let precioProductoIngresado;
	let cantidadProductoIngresado;
	let marcaProductoIngresado;
	let fabricanteProductoIngresado;
	let contadorProductoIngresado;
	let sumadorProductoIngresado;
	let contadorDeBarbijo;
	let sumadorDeBarbijo;
	let contadorDeJabones;
	let sumadorDeJabones;
	let contadorDeAlcohol;
	let sumadorDeAlcohol;
	let precioAlcoholMasBarato;
	let cantidadDeAlcoholMasBarato;
	let fabricanteDeAlcoholMasBarato;
	let promedio;
	let mayorProductoIngresado;

	contadorProductoIngresado=0;
	banderaAlcoholBarato=0;
	contadorBarbijo=0;
	sumadorDeBarbijo=0;
	contadorDeJabones=0;
	sumadorDeJabones=0;
	contadorDeAlcohol=0;
	sumadorDeAlcohol=0;


	while(contadorProductoIngresado<5)
	{
		productosIngresado=prompt("ingrese un producto valido");

		while(isNaN(productoIngresado)==false||productoIngresado!="barbijo"&&productoIngresado!="jabon"&&productoIngresado!="alcohol")
		{
			productoIngresado=prompt("Erro# ingrese un producto valido");
		}

		precioProductoIngresado=prompt("Ingrese un precio correcto");
		precioProductoIngresado=parseInt(precioProductoIngresado);
		while(isNaN(precioProductoIngresado)==true||precioProductoIngresado<100&&precioProductoIngresado>300)
		{
			precioProductoIngresado=prompt("Error# ingrese un precio correcto");
			precioProductoIngresado=parseInt(precioProductoIngresado);
		}

		cantidadProductoIngresado=prompt("Ingrese la cantidad correcto");
		cantidadProductoIngresado=parseInt(cantidadProductoIngresado);
		while(isNaN(cantidadProductoIngresado)==true||cantidadProductoIngresado<0&&cantidadProductoIngresado>1000)
		{
			cantidadProductoIngresado=prompt("Error# ingrese la cantidad correcta");
			cantidadProductoIngresado=parseInt(cantidadProductoIngresado);

		}

		marcaProductoIngresado=prompt("Ingrese la marca correcta");
		while(isNaN(marcaProductoIngresado)==false)
		{
			marcaProductoIngresado=prompt("Erro# ingrese una marca valida");
		}

		fabricanteProductoIngresado=prompt("Ingrese el fabricante correcto");
		while(isNaN(fabricanteProductoIngresado)==false)
		{
			fabricanteProductoIngresado=prompt("Error# ingrese el nombre del fabricante correcto");
		}


		contadorProductoIngresado=contadorProductoIngresado+1;

	}//llave while general


	if(banderaAlcoholBarato == 0 || precioProductoIngresado<precioAlcoholMasBarato)
		{
			precioAlcoholMasBarato=precioProductoIngresado;
			cantidadAlcoholMasBarato=cantidadProductoIngresado;
			fabricanteDeAlcoholMasBarato=fabricanteProductoIngresado;

			banderaAlcoholBarato=1;
		}
		
		switch(productoIngresado)
		{
			case "alcohol":
			if(sumadorDeAlcohol>sumadorDeBarbijo&&sumadorDeAlcohol>sumadorDeJabones) {
				mayorProductoIngresado="alcohol";
			promedio=contadorDeAlcohol/contadorDeBarbijo;
		}	break;

			case "barbijo":
			if(sumadorDeBarbijo>sumadorDeJabones&&sumadorDeBarbijo>sumadorDeAlcohol) {
				mayorProductoIngresado="barbijos"
			promedio=contadorDeBarbijo/contadorDeJabones;
		}
			else
			{
				mayorProductoIngresado="jabones"
			promedio=contadorDeJabones/contadorDeAlcohol;

			}

	    }
	    console.log=("fabricante de alcoholbarato:"+fabricanteDeAlcoholMasBarato+cantidadAlcoholMasBarato+precioAlcoholMasBarato);
	    console.log=("las unidades de jabon son:" + sumadorDeJabones);
}//llave de cierre de ejercicio 