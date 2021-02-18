/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var Descuento

	importe= document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	Descuento= importe * (25/100);

	RESULTADO= importe - Descuento;
	document.getElementById("txtIdResultado").value= RESULTADO;
}
