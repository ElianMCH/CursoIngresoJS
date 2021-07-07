/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let valor1;
	let valor2;
	let suma;
	let resuldado;

	valor1=document.getElementById("txtIdNumeroUno").value;
	valor1=parseInt(valor1);
	valor2=document.getElementById("txtIdNumeroDos").value;
	valor2=parseInt(valor2);

	suma=valor1+valor2;
	resuldado=suma;

	alert("El resultado de la suma es: "+resuldado);
}

