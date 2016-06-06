var selectElementsStartingWithA = function(array) {
  return array.filter(checkStartLetter);
};

function checkStartLetter(word) {
  return word.charAt(0) === "a";
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(checkStartLetterVowel);
};

function checkStartLetterVowel(word) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word.charAt(0)) !== -1;
}

var removeNullElements = function(array) {
  return array.filter(isNullElement);
};

function isNullElement(item) {
  return item !== null;
}

var removeNullAndFalseElements = function(array) {
  return array.filter(isNullElementAndFalse);
};

function isNullElementAndFalse(item) {
  return (item || typeof item == "number");
}

var reverseWordsInArray = function(array) {
  var newArray = [];
  array.forEach(function(word) {
    newArray.push(word.split("").reverse().join(""));
  });
  return newArray;
};

var everyPossiblePair = function(array) {
  var newArray = [];
  for(var index = 0; index < array.sort().length-1; index++) {
    var name = array[index];
    for (var i = index+1; i < array.sort().length; i++) {
      newArray.push([name, array[i]]);
    }
  }
  return newArray;
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3, array.length);
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
