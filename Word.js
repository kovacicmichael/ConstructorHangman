
const Letter = require("./letter.js")


function Word(word){
	this.letterArray = word.split("");
	//this is the array that is displayed in the console, it is based off of the createLetter function, and the replace function in the Letter constructor
	this.display = [];
	this.letterObject = [];
	//this array is here to fix words with double letters, it is what the user's correct guesses is compared against
	this.letterEndGame = [];
	//creates a Letter object from the letterArray, also pushes the letters into the letterEndGame array
	this.createLetter = function(){
		for(var i = 0; i < this.letterArray.length; i++){
			if(this.letterEndGame.indexOf(this.letterArray[i]) == -1 && this.letterArray[i] != " "){
				this.letterEndGame.push(this.letterArray[i])
			};
			var letter = new Letter(this.letterArray[i]);

			this.letterObject.push(letter);
			this.display.push(letter.replace());
		}
	}
	//determines if the guess is correct by calling the Letter check function. if so will change its revealed status to true
	this.review = function(guessedLetter){
		var isCorrect = false;
		for(var i = 0; i < this.letterArray.length; i++){
			var letter = new Letter(this.letterArray[i]);
			var letterCorrect = this.letterObject[i].check(guessedLetter);
			if (letterCorrect) {
				isCorrect = true;
			}
		};
		if (isCorrect) {
			return true;
		} else {
			return false;
		}
	}
	//updaets the display array after each user guess
	this.updateDisplay = function(){
		this.display = [];
		var me = this
		this.letterObject.forEach(function(letter){
			me.display.push(letter.replace())
		})
	}
	this.updateDisplay = this.updateDisplay.bind(this);
}



module.exports = Word;




//pseudocode

// //need a constructor that contains the following
 	//An array of new Letter objects representing the letters of the underlying word
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



