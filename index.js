//requirements
const Word = require("./Word.js");
const inquirer = require("inquirer");
//sets all variables
let wordBank = ["puppy", "mazda", "microsoft", "macintosh", "dfs"];
let targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessesLeft = 10;
let wins = 0;
let guessedLetters = [];
let guessedWords = [];
let correctLetters = [];
let generateWord = new Word(targetWord);

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
          message: "Guess a letter!"
        }
	]).then(function(answers){
		console.log("--------------------------------------------")
		let guess = answers.guess;
		let guessCorrect = generateWord.review(guess);
		let exist = guessedLetters.indexOf(guess);
		if (!guessCorrect) {
			if(exist == -1){
				guessedLetters.push(guess);
				guessesLeft--;
				console.log("");
				console.log("Incorrect Guess!!");
			}else{
				console.log("");
				console.log("That letter was already guessed.")
			}
			if(isGameLost()){
				console.log("");
				console.log("You are out of Guesses!!");
				console.log("The word was: " + targetWord);
				console.log("Next Word!")
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
				console.log("Well done! You got it!")
				console.log("Next Word!")
				reset();
			}else{
				console.log("");
				console.log("Correct Guess!");
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
	console.log("<-----Hangman Game------->")
	console.log(generateWord.display.join(" "));
	console.log("Incorrect Letters Guessed: " + guessedLetters);
	console.log("Remaining Guesses: " + guessesLeft);
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

