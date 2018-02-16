// //need a constructor that contains the following
 	//An array of new Letter objects representing the letters of the underlying word
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js")


function Word(word){
	this.letterArray = word.split("");
	this.display = [];
	this.guesses = 10;
	this.createLetter = function(){
		for(var i = 0; i < this.letterArray.length; i++){

			var letter = new Letter(this.letterArray[i]);

			this.display.push(letter.replace());
		}
		
	}
	this.review = function(guessedLetter){
		var isCorrect = false;
		for(var i = 0; i < this.letterArray.length; i++){

			var letter = new Letter(this.letterArray[i]);

			var letterCorrect = letter.check(guessedLetter);
			if (letterCorrect) {
				isCorrect = true;
			}
		}

		if (isCorrect) {
			return true;
		} else {
			return false;
		}
	}
}

//var word = new Word("test");

// word.createLetter();

//console.log("----------------")

module.exports = Word;


