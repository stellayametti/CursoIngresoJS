/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno
	var numeroDos

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	total= numeroUno + numeroDos;

	alert("La suma es" + total )
}

function restar()
{
	var numeroUno
	var numeroDos

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);
	
	total= numeroUno - numeroDos;

	alert("El resultado es " + total )
}

function multiplicar()
{ 
	var numeroUno
	var numeroDos

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);
	
	total= numeroUno * numeroDos;

	alert("El resultado es " + total )
}

function dividir()
{
	var numeroUno
	var numeroDos

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);
	
	total= numeroUno / numeroDos;

	alert("El resultado es" + total )
}

