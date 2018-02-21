// //need a constructor that contains the following
 	//An array of new Letter objects representing the letters of the underlying word
	// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js")


function Word(word){
	this.letterArray = word.split("");
	this.display = [];
	this.letterObject = [];
	this.guesses = 10;
	this.createLetter = function(){
		for(var i = 0; i < this.letterArray.length; i++){

			var letter = new Letter(this.letterArray[i]);

			this.letterObject.push(letter);
			this.display.push(letter.replace());
		}
		//console.log(this.letterObject);
		//console.log(this.display);
		
	}
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
	this.updateDisplay = function(){
		this.display = [];
		var me = this
		this.letterObject.forEach(function(letter){
			//console.log("push")
			me.display.push(letter.replace())
		})
	}
	this.updateDisplay = this.updateDisplay.bind(this);
}

var word = new Word("dog");

//console.log(word);

word.createLetter();

//var word = new Word("test");

// word.createLetter();

//console.log("----------------")

module.exports = Word;


