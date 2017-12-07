const wordBank = ["apple", "orange", "pear", "grape"];
let wins = 0;
let losses = 0;
let tries = 9;
let currentWord = "";
let wordDisplay = [];

function pickWord() {
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

function resetWordDispaly(x) {
	for (let i = 0; i < x.length; i++) {
		wordDisplay[i] = " _ ";
	};
}

function checkLetterMatch(y) {
	for (let i = 0; i < currentWord.length; i++) {
		if (y === currentWord.charAt(i)) {
			wordDisplay[i] = y;
		}
	}
}

// pickWord();
console.log(currentWord);
resetWordDispaly(currentWord);
console.log(wordDisplay);
checkLetterMatch('p');
console.log(wordDisplay);