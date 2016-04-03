ar persona ={
	nombre:"jenny";
	pais:"Ecuador";
	edad: 27,
	labroando: true,
	habilidades:["java" , "c++"]

}
function printHTML(mensaje)
{
	
	
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}
var saludo = "<p>hola" + persona.nombre + "bienvenido </p>";
saludo += "<p> como estan las cosas en " + persona.pais + "?</p>";
persona.nombre ="programador vagabundo";
saludo += "<p>tu nombre de ususario es  " + persona.nombre + "</p>";
saludo += "<p> tu edad pront sera  " + (persona.edad+1) + "</p>";
saludo += "<p> tienes al momento  " + (persona.habilidad .length+1) + "</p>";

}


