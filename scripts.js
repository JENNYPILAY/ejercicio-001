
console.log("inicio del programa");
var numerousuario=prompt("ingrese numero del 1 al 5:");
var numerodeadivinar= 3;
if (parseInt(numerousuario)===numerodeadivinar)
{
	adivinacorrectamente = true;
}
else if  (parseInt(numerousuario) > numerodeadivinar)
{
	alert("el numero que inghresaste es mayor");
	var nuevaoportunidad = prompt("intento de nuevo,ingrese un numero del 1 al 5");
	if ((parseInt(nuevaoportunidad)===numerodeadivinar))
	{
		adivinacorrectamente = true;
	}
	else
	{
		adivinacorrectamente = false;

	}
}
else if ((parseInt(numerousuario)<numerodeadivinar))
{
	alert("el numero que inghresaste es menor");
	var nuevaoportunidad = prompt("intento de nuevo,ingrese un numero del 1 al 5");
	if (parseInt(nuevaoportunidad)===numerodeadivinar)
	{
		adivinacorrectamente = true;
	}
	else
	{
		adivinacorrectamente = false;
}
}
if (adivinacorrectamente)
{
document.write("<p>ADIVINASTE</p>");
}
else
{
document.write("<p>NO ADIVINASTE .intentalo denuevo</p>");
}
console.log ("fin del programa");