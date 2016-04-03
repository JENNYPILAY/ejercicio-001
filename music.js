
console.log("inicio del program"); 
function printList (list) 
{
	//var productostock=["arroz" , "aceite" ,"shampo" , "frejoles" , "acondicionador"];
	var listHTML= "<ol>"
	for (var i = 0; i< list.length; i ++)
	 {
		listHTML += '<li>' + list[i]+ '</li>'

	}
    listHTML += '</ol>';
    print(listHTML);
}
function print(html)
{
	document.write(html);
}
var producto = [];
producto.push("arroz");
producto.push("aceite");
producto.push("shampoo");
producto.push("frejoles");
producto.push("acondicionador");

while (true)
{
	var productostock=prompt ("ingrese el producto a buscar ,o s para salir:");
	if(productostock == "s")
	{
		break;
	}

else if (productostock == "l")
{
	printList(producto);
}
else
{
var tenemos = producto.indexOf(productostock);
if (tenemos>=0)
{
	alert("SI TENEMOS EL PRODUCTO EN STOCK");
}
else if (tenemos<0)
{
	alert("ESTE PRODUCTO NO LO TENEMOS");
}
}
}


printList( playlist );
console.log("program completando")

