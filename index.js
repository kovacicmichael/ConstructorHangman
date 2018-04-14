//requirements
const Word = require("./Word.js");
const inquirer = require("inquirer");
var color = require('colors-cli');
//sets all variables
let wordBank = ["snow", "guardians of the galaxy", "lanchaster", "sasha", "rootbeer", "trivial", "red blanket", "dragon fire"];
let targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessesLeft = 10;
let wins = 0;
let guessedLetters = [];
let guessedWords = [];
let correctLetters = [];
let generateWord = new Word(targetWord);
let validate = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//initiates rungame function called below
function gameSetup(){
	generateWord.createLetter();
	var guessesLeft = 10;
	var guessedLetters = [];
	runGame();
};

function runGame(){
	display();
	inquirer.prompt([
        {
          name: "guess",
          message: "Guess a letter!",
          validate: function(input){
          	if(validate.includes(input) === false){
          		console.log(" Please enter a letter");
          	}else{
          		return true;
          	}
          }
        }
	]).then(function(answers){
		console.log("--------------------------------------------")
		let guess = answers.guess;
		let guessCorrect = generateWord.review(guess);
		let exist = guessedLetters.indexOf(guess);
		// console.log(correctLetters);
		// console.log(generateWord.letterEndGame)
		if (!guessCorrect) {
			if(exist == -1){
				guessedLetters.push(guess);
				guessesLeft--;
				console.log("");
				console.log(color.red_bt("INCORRECT!"));
			}else{
				console.log("");
				console.log(color.yellow("That letter was already guessed."))
			}
			if(isGameLost()){
				console.log("");
				console.log(color.red("You are out of Guesses!!"));
				console.log(color.red("The word was: " + color.blue(targetWord)));
				console.log(color.blue("Next Word!"))
				reset();
			}else{
				runGame();
			}
		}else{
			//check for win
			if(correctLetters.indexOf(guess) == -1){
				correctLetters.push(guess)
			}
			if(isGameWon()){
				console.log("");
				console.log(color.green("Well done! You got it!"));
				console.log(color.green("The word was: " + color.red(targetWord)));
				console.log(color.blue("Next Word!"));
				reset();
			}else{
				console.log("");
				console.log(color.blue_bt("CORRECT!"));
				generateWord.updateDisplay();
				console.log("")
				console.log("-----------------------------------------------");
				runGame();
			}
		}
	});
};
//returns true when the remainder guess are less than 1
function isGameLost(){
	return guessesLeft < 1; 
	reset();
};
//will return true when the user's correct guesses complete the word
function isGameWon(){
	if(JSON.stringify(correctLetters.sort()) == JSON.stringify(generateWord.letterEndGame.sort())){
			return true;
	};
};
//resets the necessary variables and renders a new word for the user to guess
function reset(){
	guessesLeft = 10;
	targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	generateWord = new Word(targetWord);
	guessedLetters = [];
	correctLetters = [];
	generateWord.createLetter();
	runGame()
};
//displays the game's progression
function display(){
	console.log("")
	console.log("<-----Constructor Hangman------->")
	console.log("Incorrect Letters Guessed: " + guessedLetters);
	console.log("Remaining Guesses: " + guessesLeft);
	console.log("");
	console.log(generateWord.display.join(" "));
	console.log("");
};
//initiates the entire game when the file is opened
gameSetup();



// pseudocode

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

