function mostrar()
{
	var nota
	var maximo= 10
	var minimo= 1
	var mensaje

	nota = Math.round (Math.random()*(maximo-minimo)+minimo)

	if (nota == 9 || nota == 10 ) 
	{
		mensaje= (+ nota + " Exelente ");
	}else 
		if (nota > 4) 
			{
				mensaje= (+ nota + " aprobado ");
			}else 
				{
					mensaje= ( + nota + "vamos, la proxima se puede ");
				}
				alert(mensaje)
		console.log( mensaje );
}

//FIN DE LA FUNCIÓN