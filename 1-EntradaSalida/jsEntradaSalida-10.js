/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let descuento;
	let operacion1;
	let operacion2;
	let operacion3;
	let resultado;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	descuento=prompt("Ingrese el descuento:");

	operacion1=importe*descuento;
	operacion2=operacion1/100;
	operacion3=importe-operacion2;
	resultado=operacion3;

	document.getElementById("txtIdResultado").value=resultado;




}
