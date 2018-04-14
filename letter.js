
function Letter(letter){
	this.value = letter;
	//whether the letter has been correctly guessed or not
	this.revealed = false;
	//returns the letter or the "_" based off of user guesses
	this.replace = function(){
		if(this.value === " "){
			this.revealed = true;
		}
		if(this.revealed){
			return (this.value)
		}else{
			return ("_");
		}
	};
	//changes the revealed value to true if guess was correct
	this.check = function(guess){
		if(guess === this.value){
			this.revealed = true;
			return true;
		}
		return false;
	};
};

module.exports = Letter;





//pseudocode

//need a constructor that contains
	//string value to underlying value for the character
	//boolean to see if it has been guessed
	//a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


