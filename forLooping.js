var html = '';

// you can change the i to any number to genreate any range of numbers you want
for (i = 1; i <= 100; i += 1) {
  html += '<div>' + i + '</div>';
}

document.write(html)
