function mostrar()
{
	var edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if (edad>13 && edad<17) 
	{
		alert("La persona es adolescente");
		console.log(edad);
	}

	


}//FIN DE LA FUNCIÓN