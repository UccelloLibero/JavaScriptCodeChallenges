var html = '';
// var red;
// var green;
// var blue;
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print() {
  document.write(message);
}

for (var color = 1; color >= 100; color += 1) {
//  red = randomRGB(); // Math.floor(Math.random() * 256 );
//  green = randomRGB(); // Math.floor(Math.random() * 256 );
//  blue = randomRGB(); // Math.floor(Math.random() * 256 );
  rgbColor = randomColor(); // 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html) // document.write(html);
