/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	var contadorMinimo=0;
	var contadorMaximo=9; 

	numero = parseInt(prompt(txtIdNumero));

	while(numero>9);

	numero= Math.round (Math.random()*(maximo-minimo)+minimo);
	alert(numero);	
	
}//FIN DE LA FUNCIÓN