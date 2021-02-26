/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho=parseInt(document.getElementById('txtIdAncho').value);
	largo=parseInt(document.getElementById('txtIdLargo').value);
	perimetro= (ancho + largo) * 2;

	alambre = perimetro * 3;

	alert("Se necesitan comprar " + alambre+ "mts. de alambre");

}
function Circulo () 
{
	
	var perimetro;
	var radio;
	var alambre; 
	const PI = 3.14;

	radio=parseInt(document.getElementById('txtIdRadio').value);

	perimetro= 2 * PI * radio;
	alambre= perimetro * 3;

	alert("Se necesitan comprar " + alambre +  "mts. de alambre");

	

}
function Materiales () 
{
	var ancho;
	var largo;
	var perimetro;
	var cemento;
	var cal;

	ancho=parseInt(document.getElementById('txtIdAncho').value);
	largo=parseInt(document.getElementById('txtIdLargo').value);

	perimetro= (ancho + largo) * 2;

	cemento = perimetro * 2 / 2;
	cal= perimetro * 3 / 2;

	alert("Se necesitan " + cal +  " bolsas de cal, y " + cemento +  " bolsas de cemento.")
}