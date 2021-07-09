/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	let valor1;
	let valor2;
	let suma;
	let resultado;

	valor1=document.getElementById("txtIdNumeroUno").value;
	valor1=parseInt(valor1);

	valor2=document.getElementById("txtIdNumeroDos").value;
	valor2=parseInt(valor2);

	suma=valor1+valor2;
	resultado=suma;

	alert("El resultado de la suma es: "+resultado);

}

function restar()
{
	
	let valor3;
	let valor4;
	let resta;
	let resultado;

	valor3=document.getElementById("txtIdNumeroUno").value;
	valor3=parseInt(valor3);

	valor4=document.getElementById("txtIdNumeroDos").value;
	valor4=parseInt(valor4);

	resta=valor3-valor4;
	resultado=resta;

	alert("El resultado de la resta es: "+resultado);

}

function multiplicar()
{ 
	
	let valor5;
	let valor6;
	let multiplicar;
	let resultado;

	valor5=document.getElementById("txtIdNumeroUno").value;
	valor5=parseInt(valor5);

	valor6=document.getElementById("txtIdNumeroDos").value;
	valor6=parseInt(valor6);

	multiplicar=valor5*valor6;
	resultado=multiplicar;

	alert("Elresultado de la multiplicacion es: "+resultado);

}

function dividir()
{
	
	let valor7;
	let valor8;
	let dividir;
	let resultado;

	valor7=document.getElementById("txtIdNumeroUno").value;
	valor7=parseInt(valor7);

	valor8=document.getElementById("txtIdNumeroDos").value;
	valor8=parseInt(valor8);

	dividir=valor7/valor8;
	resultado=dividir;

	alert("El resultado de la divicion es: "+resultado);

}

