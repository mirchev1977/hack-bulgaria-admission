// var input = [
// "4",
// "1 1",
// "1 2",
// "3 3",
// "2 1"
// ];

// var input = [
// "4",
// "1 1",
// "8 8",
// "7 6",
// "8 3"
// ];

var input = [
"5",
"1 1",
"8 8",
"7 6",
"8 3",
"4 5"
];

gameOfBottles(input);
function gameOfBottles(input){

	//*****************************  INITIAL DECLARATIONS  *******************************
	var figuresCount = parseInt(input[0]);
	var coordinates = input.splice(1);

	var letterIndexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

	//*****************************  FIGURE OBJECT AND FIGURES ARRAY  *******************************
	function Figure(x, y, letter){
		this.x = x;
		this.y = y;
		this.letter = letter;
		this.others = [];
	}
	var figures = [];

	createFigures();
	function createFigures(){
		coordinates.forEach( function(coor, index) {
			var arr = coor.split(" ");
			var x = parseInt(arr[0]);
			var y = parseInt(arr[1]);

			var figure = new Figure(x, y, letterIndexes[index]);
			figures.push(figure);
		});
	}

	//*****************************  DISTANCE  *******************************
	function Distance(length, figure){
		this.length = length;
		this.figure = figure;
	}

	calculateDistanceToOtherFigures();
	function calculateDistanceToOtherFigures(){
		figures.forEach( function(figure, index) {
			iterateOverOthers(figure);
		});
	}

	function iterateOverOthers(figure){
		figures.forEach( function(currentFig, index) {
			if (figure.letter !== currentFig.letter) {
				var xCells;
				var yCells;
				if (figure.x >= currentFig.x) {
					xCells = figure.x - currentFig.x;
				} else {
					xCells = currentFig.x - figure.x;
				}

				if (figure.y >= currentFig.y) {
					yCells = figure.y - currentFig.y;
				} else {
					yCells = currentFig.y - figure.y;
				}

				var totalDistance = xCells + yCells;
				
				var distance = new Distance(totalDistance, currentFig);
				figure.others.push(distance);
			}

		});
	}

	//*****************************  FIND SHORTEST DISTANCE  *******************************
	var arrDistances = [];
	function PointsDistance(one, two, distance){
		this.one = one;
		this.two = two;
		this.distance = distance;
	}
	createArrDistances(figures, 0);
	function createArrDistances(figures){
		figures.forEach( function(figure, index) {
			figure.others.forEach( function(distance, index) {
				var currentDist = new PointsDistance(figure.letter, distance.figure.letter, distance.length);
				arrDistances.push(currentDist);
			});
		});
	}

	//Create array of letters equaling the number of input points
	var allLetters = [];

	for (var i = 0; i < figuresCount; i++) {
		allLetters.push(letterIndexes[i]);
	}

	var word = allLetters.join('');

	function allAnagrams (word) {
	  if (word.length < 2) {
	    return [word];
	  } else {
	      var allAnswers = [];
	      for (var i = 0; i < word.length; i++) {
	        var letter = word[i];
	        var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
	        var shortwordArray = allAnagrams(shorterWord);
	        for (var j = 0; j < shortwordArray.length; j++) {
	          allAnswers.push((letter + shortwordArray[j]));
	        }
	      }
	      return allAnswers;
	  }
	}

	//find all combinations of input letters and assign them to the wordsArray
	var wordsArray = allAnagrams(word);

	var shortestDistance = null;

	//Iterate over the letters in the words array two by two and sum all distances between them. Then assign the shortest distance to 
	//shortestDistance
	wordsArray.forEach( function(w, index) {
		var currentLength = 0;
		for (var i = 0; i < w.length - 1; i++) {
			var one = w[i];
			var two = w[i + 1];

			var distance = arrDistances.filter(function(dist){
				return dist.one === one && dist.two === two;
			})[0];
			currentLength += distance.distance;
		}

		if (shortestDistance === null) {
			shortestDistance = currentLength;
		}

		if (currentLength < shortestDistance) {
			shortestDistance = currentLength;
		}
	});

	//Output the shortest distance
	console.log(shortestDistance);
}