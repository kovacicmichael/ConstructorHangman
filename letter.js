//need a constructor that contains
	//string value to underlying value for the character
	//boolean to see if it has been guessed
	//a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
//setup
	//variables: target word, display string, guessed letters, wins, guesses left
	//need a word and then a way to show the amount of letters of the word
	//split the word into individual letters array
	//has it been revealed? boolean
	//random word generation
	//clear guesses array
//in game
	//prompt the user for input
	//store the input in variable
	//check if letter has been guessed
		//if true return
/*	see if letter exists in word
		if true replace string with letter
		if false move guessed letter to guessed array
			--guessesleft
	checks for endagme
end game
	win 
		guess word correctly
		move on to next word
		++wins
	lose
		used up all of their guesses
		console you lose
		display correct word
		move on to new word
	reset
		calling setup

{
	value: "a",
	revealed: false,
}
// 	*/
// //list of potential words all lower case
// var wordBank = ["test", "values", "stop"];
// //chosen word
// var targetWord = "";
// //divides chosen word into individual letters
// var stringWord = targetWord.split("");
// //will store the correct letters
// var letterArray = [];
// //the number of dashes depending on the word
// var blankLetter = 0;

// for(var i = 0; i < stringWord.length; i++){
// 	var letter = new Letter(stringWord[i]);
// 	letterArray.push(letter);
// };

// console.log(letterArray);
	


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

var word = new Letter("t");
module.exports = Letter;
// var targetWord = wordBank[Math.floor(Math.random() * wordBank.length - 1)];

//console.log(word.replace());

//console.log(a.revealed);

//i need to export to word.js


