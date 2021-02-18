function mostrar()
{
	var edad 
	edad=parseInt(document.getElementById('txtIdEdad').value);
//condicion que es verdadera para los valores de edad que estan por debajo o por encima del rango[13,7]
	if (edad < 13 || edad > 17) 
	{
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN