// var input = "ddhhuu";
// var input = "ddhhddhuhhuuu";
var input = "dddhhhuuhhuuuhdddduu";



lakes(input);
function lakes(input){
	var depth = 0;
	var liters = 0;

	var directions = input.split('');

	directions.forEach( function(direction, index) {
		if (direction === 'd') {
			depth++;
		}

		if (direction === 'u') {
			depth--;
		}

		if (depth >= 0) {
			switch (direction) {
				case "d":
					if(depth > 0){
						liters += (depth * 1000) - 500;
					}
					break;
					case "h":
					liters += (depth * 1000);
					break;
					case "u":
					liters += (depth * 1000) + 500;
					break;
				default:
					break;
			}
		}	
	});

	console.log(liters);
}