function mostrar()
{
	var edad
	var estado

	edad=parseInt(document.getElementById('txtIdEdad').value);
	estado= document.getElementById('estadoCivil').value;


	if (edad > 17 && estado == "Soltero") 
	{
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN