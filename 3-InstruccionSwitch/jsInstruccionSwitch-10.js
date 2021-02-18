function mostrar()
{
	var destino;
	var estacion;
	

	destino=document.getElementById('txtIdDestino').value;
	estacion=document.getElementById('txtIdEstacion').value;
	
	switch(estacion)
	{
		case "Invierno":
		if (destino=="Bariloche") {
			alert("se puede viajar");
		}else{
			alert("No se viaja");
		}
		break;

		case  "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") {
				alert("se puede viajar");
			}else{
			alert("No se viaja");
		}
		break;
		case "Otoño":
		alert("se puede viajar");
		break;
		case "Primavera":
		if (destino == "Bariloche") {
			aler("No se puede viajar");
		}	
		else{
			("se puede viajar");
	}
			}
	
}	



//FIN DE LA FUNCIÓN