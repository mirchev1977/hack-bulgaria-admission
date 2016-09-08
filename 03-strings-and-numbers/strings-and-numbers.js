"use strict";

// var input = "bbcccddddeeeeeffffffggggggghhhhhhhhiiiiiiiiijjjjjjjjjja";
// var input = "}w#\\a:\\?uxv?xvxx@axx?\\u\\^:a~wx?x-:u\\v\\a:???^xv?x??cwwx_?uhvc:w<v,:ucwzuaw::uaucwaa^ra:;?:\\?xbw[^^:w::ca\\wcvl\\:%";
// var input = "pr$pprtppp{%r%%#(;%rn$;~*s%r%r%;(#(x$p([~(~(r}%=([$[#[~[;~+rr~[r#(n([r%(n%b~;p#rp($;$[,l?(n~p#%$prn~%$r#(~$";
var input = "|?=xi^.k%x||^cs^s^=||x=x|.&=..|=x=|&kv^^jkt&jzx.xx=|&&!jkjs&kj|x>j.!..^&k..&k||o&s|s=j.xx!x)j=!&s&]n|^j.!jx";

stringsAndNumbers(input);
function stringsAndNumbers(input){

	var charStrings = []; //fill with char strings

	var chars = input.split(''); //split the input string into array
	

	//extract characters into character strings
	chars.forEach( function(char, index) {
		
		var extracted = chars.filter(function(ch) {
			return char === ch;
		});

		chars = chars.filter(function(ch){
			return ch.localeCompare(char);
		});

		if (extracted.length !== 0) {
			charStrings.push(extracted);
		}
	});

	charStrings.forEach( function(chArr, index) {
		charStrings[index] = chArr.join('');
	});

	//sort the character strings according to their length Z-A
	charStrings = charStrings.sort(function(a, b){
		return b.length - a.length;
	});


	//create character object containing the character itself and its graded index from 9 to 0
	function CharObj(){
		this.char = null;
		this.index = 0;
	};

	//array where to hold the character objects
	var charObjects = [];

	//fil the charObjects array with character objects
	var count = 9;
	for (var i = 0; i < charStrings.length; i++) {
		var current = new CharObj();
		current.char = charStrings[i][0];
		
		current.index = count;
		charObjects.push(current);
		count--;
	}

	//recreate the array chars after splitting the characters into the initial input
	var chars = input.split('');

	//substitute the graded characters with grades 9 - 0 into the chars array. Those characters which have indexes lower than 0 remain the same
	chars.forEach( function(ch, index) {
		var equal = charObjects.filter(function(chObj) {
			return ch === chObj.char;
		});

		if (equal[0].index >= 0) {
			chars[index] = equal[0].index;
		}

	});

	//Join the chars array into string holding the graded indexes and other characters, which have been ignored because of lower than 0 indexes
	var str = chars.join('');
	var nums = str.split(/[^\d]/); //Split by the ignored characters, thus creating array of big integer strings

	var sum = ''; //to hold the sum of the big integer strings

	//sum the big integer strings
	nums.forEach( function(num, index) {
		if (num !== '') {
		   sum = sumStrings(sum, num);
		}
	});

	//output
	console.log(sum);

	//sum strings
	function sumStrings(a, b) {
	  var carry = 0, result = [],
	      len = Math.max(a.length, b.length), i = len;
	  while (i--) {
	    var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
	    carry = parseInt(sum / 10);
	    result.unshift(sum % 10);
	  }
	  if (carry) result.unshift(carry);
	  return result.join('');
	}
}