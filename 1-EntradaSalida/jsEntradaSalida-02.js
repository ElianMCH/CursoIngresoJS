/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	let mensaje;
	nombre = prompt("Ingrese su nombre:");
	mensaje = "Su nombre es: ";
	alert(mensaje+nombre);
}

