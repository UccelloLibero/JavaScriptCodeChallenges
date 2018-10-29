function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


var count = 0;
while (count < 1000) {
  var randNum = randomNumber(10);
  document.write(randNum + ' ');
  count += 1;
}
