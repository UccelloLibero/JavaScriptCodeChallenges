var haveAtHome = ['potatoes', 'onions', 'peppers', 'carrots', 'milk', 'eggs',  'olive oil', 'flour', 'cheese', 'crackers'];

var search;

//var shopping = [];

function print(message) {
  document.write('<p>' + message + '</p>');
}

while (true) {
  search = prompt ("Check if we have it at home before buying it... Type 'list' to show all ingredients we have at home and 'quit' to stop this search.");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
      print(haveAtHome.join(', '));
  } else {
      if (haveAtHome.indexOf(search) > -1) {
        print('We have ' + search + ' at home so no need to buy it.');
      } else {
        print('We do not have ' + search + ' at home, add it to the shopping list.');
        // shopping = search.push();
      }
  }
}
