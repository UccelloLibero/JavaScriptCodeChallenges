/*
Random number guessing game computer vs user
- - Page loads and the prompt appears, the user needs to try to guess a number between one and ten;
- - The same promt appears again and again until the correct number is guessed then a message is displyed;
- - Message: number of tries and the correct answer
*/


var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // flag kind of a variable because it is used to determine the state of a particular condition.


function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = promt('I am thinking of a number between 1 and 10. Can you guess the number? ');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (! correctGuess); // This loop needs to be repeated as long as this condition is true - - here meaning as long as the player hasn't got the correct answer. To indicate this we're using the not operator '!' - - this exclamation mark inverts or turns a boolean value to its opposite. - - so not operator in front of true value, it turns it to false. - - '!' in front of correctGuess makes it true - - as long as the user guess is incorrect the loop should run again.

document.write('<h2>You guessed the number!</h2>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
