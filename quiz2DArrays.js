// Two arrays, one with correct answers and one with worng correctAnswers
// Like two lists
// Convert two arrarys into two HTML ordered lists

var qAndA = [
  ['What is the tallest mountian in the USA?', 'Denali'],
  ['What is the largest river in the world?', 'Amazon'],
  ['How many continents are there?', 'Seven']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var update;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  /*
GetElementByID is a method of the document object just like write is a method of the document object.
The get element by ID method locates a tag with a specific idea attached to it, just like the empty DIV in the index.html file (an example).
You need to provide this method a string, that contains the ID name of the tag you want to select.
So this code tells the JavaScript interpreter to look at the current webpage and locate a tag with the ID output.
  */
}

// Convert two arrarys into two HTML ordered lists
// Create a function that accepts an array as a parameter, then loops through that array constructing the HTML for an ordered list.
function makeList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
} // As is is just a string but when added to the webpage the browser will convert it and display it as an HTML ordered list.

// for loop to ask q's and check if the user aswered the q correctly
for (var i = 0; i < qAndA.length; i += 1) {
  question = qAndA[i][0];
  answer = qAndA[i][1];
  response = prompt(question); // parseInt(prompt(question)); -- convert prompt dialog string into a number after asking the question if the answer in the array is a number
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

update = 'You got ' + correctAnswers + ' question(s) right!';
update += '<h2>These are the questions you answered correctly:</h2>';
update += makeList(correct);
update += '<h2>These are the questions you answered incorrectly:</h2>';
update += makeList(wrong);
print(update);
