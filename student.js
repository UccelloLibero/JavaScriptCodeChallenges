// Add an if conditional statement that tests to see if the isAdmin variable is true. If it is then open an alert dialog with the message 'Welcome Administrator!'.
// Add an else if clause that tests to see if the isStudent variable is true. If it is then open an alert dialog with the message 'Welcome student'.
// Add a final else clause to this conditional statement so that if the isAdmin variable and isStudent variables are both false an alert opens with the message "Who are you?"
var isAdmin = false;
var isStudent = true;

if (isAdmin === true) {
  alert('Welcome Administrator!');
} else if (isStudent === true) {
  alert('Welcome Student!');
} else {
  alert('Who are you?')

}
