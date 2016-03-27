

function numALAzar(lim1,lim2)
{
	var num = Math.floor(Math.random()*(lim1-lim2)) + lim2;
    return num;
}

var limit1 = parseInt(prompt("ingrese primer limite mayor:"));
if (isNaN(limit1))
{
	throw Error("NO ES NUMERO VALIDO");
} 
var limit2  = parseInt(prompt("ingrese segundo limite menor:"));
if (isNaN(limit2))
{
	throw Error("NO ES UN NUMERO VALIDO");
}
var numero = numALAzar(limit1,limit2);
alert("los numeros al azar son: " +numero);





