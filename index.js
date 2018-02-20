//contains the logic for the course of the game, depends on words.js
	//randomly selects a word and uses the word constructor to store it
	//prompts the user for each guess and keeps track of the user's remaining guesses

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
*/

var Word = require("./Word.js");
var inquirer = require("inquirer");


var wordBank = ["test", "values", "stop"];
//chosen word
var targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//guesses reamining
var guessesLeft = 10;
//wins
var wins = 0;
//what they have already guessed
var guessedLetters = [];
//already guessed words pushed here
var guessedWords = [];

//console.log(targetWord);


//game setup
function gameSetup(){
	var generateWord = new Word(targetWord);
	generateWord.createLetter();
	console.log("<-----Hangman Game------->")
	console.log(generateWord.display.join(" "));
	runGame();

	
}

function runGame(){
	var generateWord = new Word(targetWord)
	for(var i = 0; i < Word.letterArray.length; i++){
		inquirer.prompt([
			        {
			          name: "guess",
			          message: "Guess a letter!"
			        }
			]).then(function(answers){
				console.log("<-----Hangman Game------->")
				var guess = answers.guess;
				var guessCorrect = generateWord.review(guess);
				if (!guessCorrect) {
					guessesLeft--;
					guessedLetters.push(guess);
				}else{
					Letter.revealed == true;


				}

				// display updated game state
				// check to see if they won or lost
				

				// for(var i = 0; i < generateWord.length; i++){
				// 	if(guess === )
				// 	generateWord.createLetter();
				// 	console.log(generateWord.display.join(" "));

				// };

		//invoke functions for Word
			})
	};
}

gameSetup();
