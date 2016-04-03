
function random( limite)
{
	return Math.floor(Math.random () * limite);
}

function crearcolorbasico();
{

	var colorbasico = random(256);
	return colorbasico;
}	
function crearcolorRgb();

{
	var AZUL = crearcolorbasico ();
	var rojo = crearcolorbasico ();
	var verde = crearcolorbasico ();
	var rgbColor = 'rgb(' + azul + ', ' + rojo' , ' + verde' )';
	return rgbColor;
	}
	var numeroColores = parseInt(prompt("ingrese el numero de colores que desea mostrar: "));


		for (var i=o ; i < numeroColores; i++)
	{
		html += '<div style="background-color:' + crearcolorRgb() + '"></div>';
	}
	document.write(html);
