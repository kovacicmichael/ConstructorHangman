//need a constructor that contains
	//string value to underlying value for the character
	//boolean to see if it has been guessed
	//a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


	


function Letter(letter){
	this.value = letter
	this.revealed = false;
	this.replace = function(){
		if(this.revealed){
			return (this.value)
		}else{
			return ("_");
		}
	};
	this.check = function(guess){
		if(guess === this.value){
			this.revealed = true;
		}
	};
};

//var word = new Letter("t");
module.exports = Letter;
// var targetWord = wordBank[Math.floor(Math.random() * wordBank.length - 1)];

//console.log(word.replace());

//console.log(a.revealed);

//i need to export to word.js


