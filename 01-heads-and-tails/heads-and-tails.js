// var  input = ["H", "H", "H", "H", "T", "T", "T"];
// var  input = ["H", "H", "H", "H", "T", "T", "T", "T"];
var  input = ["H", "H", "H", "H", "T", "T", "T", "T", "T", "T", "T", "H", "H", "T", "T", "H", "H", "H", "H", "H", "H", "T", "T", "T"];
// var input = ["H", "H", "H", "H", "T", "T", "T", "T"];
// var input = ["H", "T", "H", "T", "T", "H", "T"];


headsAndTails(input);
function headsAndTails(input){

	var hs = 0;
	var ts = 0;

	var currentElement = '';
	var first = input[0];
	if (first === 'H') {
		currentElement = 'H';
	} else {
		currentElement = 'T';
	}

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

	if (hs > ts) {
		console.log('H wins!');
	} else if (hs < ts) {
		console.log('T wins!');
	} else {
		console.log('Draw!');
	}
}