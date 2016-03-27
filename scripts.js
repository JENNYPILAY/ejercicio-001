
function numeroAlAzarEntreLimites(lim1,lim2)
{
	var num=Math.floor(Math.random()*(lim1-lim2))+lim2;
	return num;
}
var limiteSuperior=prompt("Ingrese limite superior: ");
var limiteInferior=prompt("Ingrese limite Inferior: ");

if (isNaN(limiteInferior) || isNaN(limiteSuperior))
{
	throw Error("Numero no es valido");
}

var contador = 0;
while (contador<10)
{
var randomico = numeroAlAzarEntreLimites(parseInt(limiteSuperior),parseInt(limiteInferior));
document.write(randomico+" ");
contador++;
}
