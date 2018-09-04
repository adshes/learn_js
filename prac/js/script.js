var location1= 3
var location2= 4;
var location3= 5;

var guess;
var hits = 0;
var quesses = 0;

var isSunk = false;
  while (isSunk == false){

  	guess = prompt('Ready, aim, fire! (enter a number 0-6):');
  	if (guess<0 || guess>6) {
  		alert('Введи другой номер');
  	}
  	else {

  		quesses = quesses + 1;
  	}
  	if (guess == location1 || guess == location2 || guess== location3){
  		hits =hits + 1;
  		alert('HIT!');


  }
   if (hits ==3){
   	isSunk = true;
   	alert('You sank my battleship!');

   }
   else{
  	alert('MISS');
  }
  	}
var stats = "You took " + quesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/quesses);
alert(stats);