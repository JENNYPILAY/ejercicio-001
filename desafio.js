console.log("inicio del program"); 
function printlistareproduccion(ListaCanciones)
{
	var listHTML = '<ol>';
	for (var i = 0; i< list.length; i ++)
	{
		listHTML += '<li>tema:'+ listaCanciones[i][0] + '. Por: ' + listaCanciones [i][1] + ' </li>';
	}
    listHTML += '</ol>';
    print(listHTML);
}
function print(html)
{
	document.write(html);
}
var playlist = [];
playlist.push(["violeta", "marisol cantos"]);
playlist.push(["tu eres bandido","Jose Echeverria"]);
playlist.push(["el problema","richar crespin"]);
playlist.unshift(["romeo santos","johao Lopez"]);
playlist.unshift(["soneros de bailadores","Angel Morales"]);

printlistareproduccion( playlist );
console.log("program completando")
