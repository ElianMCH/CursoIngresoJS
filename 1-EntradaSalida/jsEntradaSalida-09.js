/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let aumento;
	let operacion1;
	let operacion2;
	let operacion3;
	let resultado;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

	aumento=prompt("Ingrese el aumento:");

	operacion1=sueldo*aumento;
	operacion2=operacion1/100;
	operacion3=sueldo+operacion2;
	resultado=operacion3;

	document.getElementById("txtIdResultado").value=resultado;

	/*Pa averiguar el descuen o aumento de un valor hay que multiplicar el valor por el 
	porcentaje y dividirlo por 100*/

}
