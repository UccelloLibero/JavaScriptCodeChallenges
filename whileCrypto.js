/*
- - Generate a random number from 1 to 10000 - this is the number the computer needs to guess
- - Enter a while loop - inside the loop the computer will 'guess' a random number; if the number the computer guesses matches the number generated at the beginning of the program the loop ends and if not then the loop continues until the correct number is guessed.
- - Exit the loop and print the random number and the number of times it took the computer to guess it.
*/

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess; // a variable to hold the computers' guess
var attempts = 0; // a var to keep track of how many times did the computer try to guess

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write('<h2>The random number was: ' + randomNumber + '.</h2>');
document.write('<h2>It took the computer ' + attempts + ' attempts to get the right number.</h2>');
