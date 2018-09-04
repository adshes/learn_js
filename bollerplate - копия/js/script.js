/*34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];*/
var i = 0;
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
while (i<hasBubbleGum.length){
	if (hasBubbleGum[i]){
		console.log(products[i] +" contains");
		i = i+1
	}

	
}