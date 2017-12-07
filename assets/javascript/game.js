const wordBank = ["apple", "orange", "pear", "grape"];
let wins = 0;
let losses = 0;
let tries = 9;
let currentWord = "";
let wordDisplay = "";

function pickWord() {
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}