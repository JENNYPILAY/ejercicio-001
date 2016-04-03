var preguntas = [
{ pregunta: "Cuantos goles le metio Barcelona a Liga?", respuesta: 5},
{ pregunta: "quien descubrio America?", respuesta: "Cristobal Colon"},
{ pregunta: "Cuantos lados tiene un cuadrilatero?", respuesta: 4}, 
{ pregunta: "Cuantos años lleva Correa en el poder ejecutivo?", respuesta: 9},
{ pregunta: "cuantos van en el carro de los chispas?", respuesta: 3}
];

}

function imprimirRespuestas(respondidaCorrectamente)
{
	var stringRespuestas = '';
	var contRespuestas = 0;
	for (var i =0; i<preguntas.length; i++)
	{	
		if(respondidaCorrectamente==preguntas[i]["acerto"])
		{
			contRespuestas++;
			stringRespuestas += "<p> " + preguntas[i].pregunta + "<br>" + 
			preguntas[i].respuestaUsuario + "</p>";		
		
			
			if(!preguntas[i].acerto)
			{
			stringRespuestas+= "<i>La respuesta correcta era: " + 
			preguntas[i].respuesta + "</i>";
			}	
		}
	}
	
	if(contRespuestas<1)
	{
		stringRespuestas = "No hubo respuestas ";
		if(respondidaCorrectamente){
			stringRespuestas += "correctas";
		}else{
			stringRespuestas += "incorrectas";}
	}
	return stringRespuestas;
}


function imprimirCuestionario()
{
	html += '<h2 style="color:#64DD17;">Respuestas Correctas</h2>';
	html += imprimirRespuestas(true);
	html += '<h2 style="color:#FF9800;">Respuestas Incorrectas</h2>';
	html += imprimirRespuestas(false);
	return html;
}
{

}







function printHTML(mensaje)
{
	
	
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i].pregunta);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		preguntas[i].respuestaUsuario = respuestaSimple.toLowerCase();
	}else{
		preguntas[i].respuestaUsuario = parseInt(respuestaSimple);
	}

	if(preguntas[i].respuestaUsuario==preguntas[i].respuesta)
	{
		preguntas[i].acerto = true;
	}else{
		preguntas[i].acerto = false;	
	}
}

var html = "<h1> <br>ADIVINA ---ADIVINADOR</br></h1>";
html += "<h1><br>ESTE ES EL  resultado de sus respuestas</br></h1>"
html = imprimirCuestionario();
printHTML(html);