var input = [
"3",
"1 1",
"1 2",
"3 3"
];

gameOfBottles(input);
function gameOfBottles(input){

	var figures = parseInt(input[0]);
	var coordinates = input.splice(1);

	var letterIndexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

	function Figure(x, y, letterIndex){
		this.x = x;
		this.y = y;
		this.letterIndex = letterIndex;
		this.closestFigures = [];
	}

	coordinates.forEach( function(el, index) {
		coordinates[index] = el.split(" ");
		var currentFigure = new Figure(parseInt(coordinates[index][0]), parseInt(coordinates[index][1]), letterIndexes[index]);
		coordinates[index] = currentFigure;
	});

	var figureCoordinates = coordinates;

	// coordinates.forEach( function(figCoord, index) {
	// 	var x = figCoord[0];
	// 	var y = figCoord[1];

	// 	findClosestFigure(x, y, index);
	// 	console.log('');
	// });

	// function findClosestFigure(x, y, index){
		
	// 	var shortestDistance = null;

	// 	coordinates.forEach( function(figCoord, currentInd) {
	// 		if (index !== currentInd) {
	// 			var xCells = 0;
	// 			var yCells = 0;
	// 			var currentX = figCoord[0];
	// 			var currentY = figCoord[1];
				
	// 			if (x >= currentX) {
	// 				xCells = x - currentX;
	// 			} else {
	// 				xCells = currentX - x;
	// 			}

	// 			if (y >= currentY) {
	// 				yCells = y - currentY;
	// 			} else {
	// 				yCells = currentY - y;
	// 			}

	// 			var totalDistance = xCells + yCells;

	// 			if (shortestDistance === null) {
	// 				shortestDistance = totalDistance;
	// 			} else {
	// 				if (totalDistance < shortestDistance) {
	// 					shortestDistance = totalDistance;
	// 				}
	// 			}

	// 			console.log(xCells, yCells, totalDistance, shortestDistance);
	// 		}
	// 	});
	// }
}