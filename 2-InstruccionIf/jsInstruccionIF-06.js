function mostrar()
{
	var edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if (edad < 13)
	 {
	 	alert("Esta persona es un niño" );

	 }else
	 	{
	 		if (edad>13 && edad<17)
	 		 {
	 		 	alert("Esta persona es adolescente");
	 	}else
	 		 	{
	 		 	alert("Esta persona es un adulto");
	 		 	}
	 		
	 	}


}//FIN DE LA FUNCIÓN