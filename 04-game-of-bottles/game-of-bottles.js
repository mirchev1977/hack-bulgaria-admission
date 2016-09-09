var input = [
"4",
"1 1",
"1 2",
"3 3",
"2 1"
];

gameOfBottles(input);
function gameOfBottles(input){

	//*****************************  INITIAL DECLARATIONS  *******************************
	var figuresCount = parseInt(input[0]);
	var coordinates = input.splice(1);

	var letterIndexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

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
			console.log(figure);
			console.log();
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
}