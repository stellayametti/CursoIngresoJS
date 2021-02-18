/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var prductoUno;
	var productoDos;
	var productoTres;
	

	prductoUno=parseFloat(document.getElementById('txtIdPrecioUno').value);
	productoDos=parseFloat(document.getElementById('txtIdPrecioDos').value);
	productoTres=parseFloat(document.getElementById('txtIdPrecioTres').value);

	 resultado = prductoUno + productoDos + productoTres;

	alert("el precio final es $ " + resultado);
	
}
function Promedio () 
{
	var prductoUno;
	var productoDos;
	var productoTres;
	var suma;
	var promedio;

	prductoUno=parseFloat(document.getElementById('txtIdPrecioUno').value);
	productoDos=parseFloat(document.getElementById('txtIdPrecioDos').value);
	productoTres=parseFloat(document.getElementById('txtIdPrecioTres').value);


	
	 resultado = prductoUno + productoDos + productoTres;

 	 promedio= resultado / 3;

	alert("el porcentaje final es $ " + promedio);
}
function PrecioFinal () 
{
	var prductoUno;
	var productoDos;
	var productoTres;
	var suma;
	var iva;
	var importeTotal;

	prductoUno=parseFloat(document.getElementById('txtIdPrecioUno').value);
	productoDos=parseFloat(document.getElementById('txtIdPrecioDos').value);
	productoTres=parseFloat(document.getElementById('txtIdPrecioTres').value);

	 suma = prductoUno + productoDos + productoTres;

	 iva= suma * 21 / 100;

	 importeFinal = suma + iva;

	alert("el precio final es $ " + importeFinal);
}