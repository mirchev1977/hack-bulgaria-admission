// var  input = ["H", "H", "H", "H", "T", "T", "T"];
// var  input = ["H", "H", "H", "H", "T", "T", "T", "T"];
var  input = ["H", "H", "H", "H", "T", "T", "T", "T", "T", "T", "T", "H", "H", "T", "T", "H", "H", "H", "H", "H", "H", "T", "T", "T"];
// var input = ["H", "H", "H", "H", "T", "T", "T", "T"];
// var input = ["H", "T", "H", "T", "T", "H", "T"];


headsAndTails(input);
function headsAndTails(input){

	//collect here the length of the longest sequence of Hs or Ts
	var hs = 0;
	var ts = 0;

	//initialize the variable currentElement to whold the current value of the element from the array input
	var currentElement = '';
	var first = input[0];
	if (first === 'H') {
		currentElement = 'H';
	} else {
		currentElement = 'T';
	}

	//iterate over the array input and its elements one by one. Collect the longest sequences of Hs and Ts
	var counter = 0;
	input.forEach( function(element, index) {
		if (element === currentElement) {
			counter++;
		} else {
			if (currentElement === 'H') {
				currentElement = 'T';
				if (counter > hs) {
					hs = counter;
				}
				counter = 1;
			} else {
				currentElement = 'H';
				if (counter > ts) {
					ts = counter;
				}
				counter = 1;
			}
		}
	});

	//add points to the hs and ts after going out of the forEach loop
	if (currentElement === 'H') {
		currentElement = 'T';
		if (counter > hs) {
			hs = counter;
		}
	} else {
		currentElement = 'H';
		if (counter > ts) {
			ts = counter;
		}
	}

	//compare which character H or T has longer character sequence. Print the winner or Draw
	if (hs > ts) {
		console.log('H wins!');
	} else if (hs < ts) {
		console.log('T wins!');
	} else {
		console.log('Draw!');
	}
}