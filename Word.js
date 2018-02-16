// //need a constructor that contains the following
 	//An array of new Letter objects representing the letters of the underlying word
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


//requires letter.js
//export to index.js


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
		for(var i = 0; i < this.letterArray.length; i++){

			var letter = new Letter(this.letterArray[i]);

			letter.check(guessedLetter);
		}
	}
}


var word = new Word("test");



console.log(word.display);
console.log("----------------")

















module.exports = Word;