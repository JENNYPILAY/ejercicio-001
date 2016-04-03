var html = '';
var rojo;
var verde;
var azul;
var rghColor;
function random(limite)
{
	return Math.floor(Math.random ()* limite);
}

function creacolorbasico()
{

	var colorbasico = random(256);
	return colorbasico;
}	
function creacolorRgb()

{
	var azul = creacolorbasico ();
	var rojo = creacolorbasico ();
	var verde = creacolorbasico ();
	var rgbColor = 'rgb(' + azul + ', ' + rojo' , ' + verde' )';
	return rgbColor;
	}
	var numColores = parseInt(prompt("ingrese el numero de colores que desea mostrar: "));


		for (var i=o ; i < numColores; i++)
	{
		html += '<div style="background-color:' + creacolorRgb() + '"></div>';
	}
	document.write(html);
