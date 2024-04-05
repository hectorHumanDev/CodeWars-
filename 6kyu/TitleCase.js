// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(title, minorWords) {
  var titleArr = title.toLowerCase().split(" "),
    minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return titleArr
    .map(function (e, i) {
      return minorWordsArr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e;
    })
    .join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of"));
