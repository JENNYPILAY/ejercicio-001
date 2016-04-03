
console.log("inicio del program"); 
function printList (list) 
{
	var listHTML = '<ol>';
	for (var i = 0; i< list.length; i ++)
	 {
		listHTML += '<li>' + list[i]+ '</li>';
	}
    listHTML += '</ol>';
    print(listHTML);
}
function print(html)
{
	document.write(html);
}
var playlist = [];
playlist.push("violeta");
playlist.push("tu eres bandido");
playlist.push("el problema");
playlist.unshift("romeo santos");
playlist.unshift("soneros de bailadores");

printList( playlist );
console.log("program completando")

