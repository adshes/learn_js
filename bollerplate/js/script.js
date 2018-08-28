console.log('You are at ' +window.location); 
var x = prompt('сколько у вас с собой есть денег');

var i = prompt('сколько вы купили батонов хлеба');



var j = prompt('спросит сколько вы купили яблок');

var u = prompt('сколько стоит одно яблоко');

var k = prompt('сколько стоит один батон хлеба');
//var c= i*k+j*u;

//var s = x>c;
//document.write(s);

 function haveEnough(x, i, j, u, k) {


	//haveEnough(document.body, 'Вам хватает денег на покупки');


	//haveEnough(document.body, 'Вам не хватает денег на покупки');
	//document.write(haveEnough);
if (x>=(i*k+j*u)) {

return('Вам хватает денег на покупки');

} else{
	return('Вам не хватает денег');

}


}

