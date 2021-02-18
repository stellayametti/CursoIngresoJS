function mostrar()
{
	//tomo el mes
	var mes 
	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case"Febrero":
		alert("Este mes no tien mas de 29 dias");
		break;

		case"Enero":
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		case"Julio":
		case"Agosto":
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Este mes tiene 30 o más días");
		break;
	}
	
	
	


}//FIN DE LA FUNCIÓN