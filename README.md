# Hangman-Game
Hangman game using javascript

Basic Rules:
A word will be picked at random from a list.
The game will then create a line of blank lines depending on how long the word is, one for each letter in the word
Finally display that string to the player
Players will start the game by typing a letter key on the keyboard
The game will then check if the typed letter matches any letter from the picked word
If the letter matches any word in the word, then replace the matching blank string  with the letter
If not, the number of tries the player has will be reduced by one, and the letter typed will be displayed on a list
If the player guesses all the letters correctly, the adds one to the wind counter
If not, the game will add one to the loose counter
In either case, the game will pick another word from the list, reset the number of tries and current displayed word