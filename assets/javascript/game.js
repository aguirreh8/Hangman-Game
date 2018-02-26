const wordBank = ["apple", "orange", "pear", "grape", "pinnaple", "mango", "tangerine", "kiwi", "melon", "strawberry", "grapefruit", "banana", "cherry", "peach"]; //stores list of words to use in game
let wins = 0; // number of wins
let losses = 0; // number of losses
let tries = 9; // number of tries
let currentWord = ""; // stores the randomly picked word from bank. To be used as global variable
let wordDisplay = []; // separates currentWord into an array for input matching
let letterUsed = [];

//randomly select a word from wordBank by array index
function pickWord() {
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

//sets wordDisplay array equal the length of the current picked word, and assings a underscore (empty letter) to each index
//takes current word as parameter (x)
function resetWordDispaly(x) {
	wordDisplay = [];
	let blankWord = "";
	for (let i = 0; i < x.length; i++) {
		wordDisplay[i] = " _ ";
		blankWord = blankWord + wordDisplay[i]; //" _ _ _ _ _ "
	};
	document.querySelector('#wordToGuess').innerHTML = blankWord;
	letterUsed = [];
}

//check if the current pressed key value matches any character in the current word
//takes current key value as tring as a parameter (y)
function checkLetterMatch(y) {
	let foundInArray = 0;
	let gameWon = false; 
	for (let i = 0; i < currentWord.length; i++) {
		if (y === currentWord.charAt(i)) {
			wordDisplay[i] = y;
			foundInArray++;
			gameWon = winCondition();
			if (gameWon == true) {
				return;
			} 
		} 
	}
	if (foundInArray == 0) {
		if (letterUsed.length == 0) {
			letterUsed.push(y);
			document.querySelector('#letterUsed').innerHTML = letterUsed;
			loseCondition();
		} else {
			let x = checkIfUsedLetter(y);
			if (x == false) {
				letterUsed.push(y);
				document.querySelector('#letterUsed').innerHTML = letterUsed;
				loseCondition();
			}
		}
	}
}

//puts current wordDisplay values into a string, then compare that string to currentWord
//if new string matches currentWord, add 1 to wins, reset tries, pick new word and reset wordDisplay
function winCondition() {
	//define local variable
	let wordProgress = "";
	for (let i = 0; i < wordDisplay.length; i++) {
		wordProgress = wordProgress + wordDisplay[i];
	}
	document.querySelector('#wordToGuess').innerHTML = wordProgress;
	if (wordProgress === currentWord) {
		alert("You won!");
		wins++;
		tries = 9;
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		document.querySelector('#tries').innerHTML = "Tries: " + tries;
		pickWord();
		resetWordDispaly(currentWord);
		return true;
	} else {
		return false;
	}
}

//subtracts 1 from tries, and if tries = 0, then add 1 to losses, pick new word and reset word display
function loseCondition() {
	tries--;
	let newImage = '<img src="assets/images/' + tries + '.png" />';
	document.querySelector('#hangman').innerHTML = newImage;
	document.querySelector('#tries').innerHTML = "Tries: " + tries;
	if (tries === 0) {
		alert("You lose... the word was: " + currentWord);
		losses++;
		tries = 9;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		document.querySelector('#tries').innerHTML = "Tries: " + tries;
		document.querySelector('#hangman').innerHTML = "";
		pickWord();
		resetWordDispaly(currentWord);
	}
}

//Checks if current used letter already exists in letterUsed
function checkIfUsedLetter(z) {
	for (let i = 0; i < letterUsed.length; i++) {
		if (z == letterUsed[i]) {
			return true;
		} 
	}
	return false;
}

pickWord();

document.addEventListener("DOMContentLoaded", function(event) {
    resetWordDispaly(currentWord);
  });

//listens to key pressed on keyboard
window.addEventListener('keyup', function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		let keyPress = event.key.toLowerCase();
		checkLetterMatch(keyPress);
	}
})
