/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	let mensaje;
	nombre=document.getElementById("txtIdNombre").value;
	mensaje="Su nombre es: ";
	//txtIdNombre.value;
	alert(mensaje+nombre);

}


