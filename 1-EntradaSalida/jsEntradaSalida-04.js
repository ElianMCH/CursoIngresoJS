/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	let apellido;
	let mensaje;
	
	nombre=prompt("Ingrese su nombre:");
	apellido=prompt("Ingrese su apellido:");
	mensaje="Su nombre es "+nombre+" y el apellido "+apellido;
	document.getElementById("txtIdNombre").value = mensaje;
}

