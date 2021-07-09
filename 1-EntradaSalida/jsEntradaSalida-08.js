/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	let valor1;
	let valor2;
	let dividir;
	let resultado;

	valor1=document.getElementById("txtIdNumeroDividendo").value;
	valor1=parseInt(valor1);

	valor2=document.getElementById("txtIdNumeroDivisor").value;
	valor2=parseInt(valor2);

	dividir=valor1%valor2;
	resultado=dividir;

	alert("El resto es: "+resultado);

	//El signo 5 es para sacar el resto de la divicion.

}
