/**
 * function that takes a word and moves capital letters to front
 @param {string} word
 @return {string} 
 * capital letters moved to front of word
 ***************************************************************/

function capToFront(word) {
  const letters = word.split("");

  const capLetters = letters.filter(
    (letter) => letter === letter.toUpperCase()
  );
  const lowerLetters = letters.filter(
    (letter) => letter === letter.toLowerCase()
  );

  const joinCapitalLetters = capLetters.join("");
  const joinLowerLetters = lowerLetters.join("");

  return `${joinCapitalLetters}${joinLowerLetters}`;
}



/** Two functions: encode() replaces vowels with 1 - 5. decode() replaces numbers with respective vowels
 @param {string} word
 @return {string} 
  * a -> 1
  * e -> 2
  * i -> 3
  * o -> 4
  * u -> 5
  ***************************************************************/

function encode(string) {
  return string
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
}

function decode(string) {
  return string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}



/**
 * Rock, Paper, Scissors
 @param {2arrays} games
 @return {string} return the name of the winner
 ***************************************************************/

function calculateScore(games) {
  let abigailWins = 0;
  let bensonWins = 0;
  let tiedRounds = 0;

  games.forEach(game => {
    if (game[0] === game[1]) {
      tiedRounds += 1;
    } else if (game[0] === 'R' && game[1] === 'S') {
      abigailWins += 1;
    } else if (game[0] === 'S' && game[1] === 'P') {
      abigailWins += 1;
    } else if (game[0] === 'P' && game[1] === 'R') {
      abigailWins += 1;
    } else if (game[1] === 'R' && game[0] === 'S') {
      bensonWins += 1;
    } else if (game[1] === 'S' && game[0] === 'P') {
      bensonWins += 1;
    } else if (game[1] === 'P' && game[0] === 'R') {
      bensonWins += 1;
    }
  })

  return abigailWins > bensonWins ? "Abigail" : abigailWins < bensonWins ? "Benson" : "Tie";
}



/**
 * Return letters only from a string
 @param {string} letters/numbers/symbols
 @return {string} return 'decoded' string ex/ "R!=:~0o0./c&}9k`60=y" => "Rocky"
 ***************************************************************/

const lettersOnly = str => str.replace(/[^A-Za-z]/g, "");



/**
 * Sort Numbers in descending order
 @param {number}
 @return {number} return reversed number
 ***************************************************************/

const sortDescending = num => {
  +num.toString()
    .split('')
    .sort()
    .reverse()
    .join('');
}



/**
 * Reverse the Case
 @param {string}
 @return {string} return reversed case => lower case = uppercase and vice versa
 ***************************************************************/

const reverseCase = (str) =>
  str.split('')
    .map((letter) => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
    .join('');



/**
 * Hiding the Card Number
 @param {string} Card# - Card number as a string
 @returns {string} Same string with only the last four digits showing, replacing everything else with asterisks
 ***************************************************************/

function cardHide(card) {
  const hidden = "*";
  const slicedCardNum = card.slice(-4);
  const numOfAsterisks = card.length - 4;
  const asterisks = hidden.repeat(numOfAsterisks);

  return `${asterisks}${slicedCardNum}`;
}



/**
 * Finding Nemo
 @param {string} Sentence - Sentence thats either includes or does not include 'Nemo'
 @returns {string} - Message that tells user what index 'Nemo' is at
 ***************************************************************/

function findNemo(sentence) {
  const nemoIndex = sentence.split(' ').indexOf('Nemo') + 1;
  let message = '';

  (sentence.search('nemo') && nemoIndex !== 0)
    ? message = `I found Nemo at ${nemoIndex}!`
    : message = "I can't find Nemo :(";

  return message;
}



/**
 * Find Middle Characters of a String
 @param {string} Word 
 @returns {string} - Middle character if odd, middle two characters if even
 ***************************************************************/

function getMiddle(str) {
  const strChar = str.split('');
  const strCharLength = strChar.length;

  const middleCharacters = (strCharLength % 2 === 0)
    ? [strChar[strCharLength / 2 - 1], strChar[strCharLength / 2]].join('')
    : strChar[Math.floor(strCharLength / 2)];

  return middleCharacters;
}



/**
 * Reverse the Odd Length Words
 @param {string} 
 @returns {string} - Same string, but odd length words are reversed
 ***************************************************************/

function reverseOdd(str) {
  const eachWord = str.split(' ');

  const newArr = eachWord.map(word => {
    if (word.length % 2 !== 0) {
      return word
        .split('')
        .reverse()
        .join('');
    } else {
      return word;
    }
  });

  return newArr.join(' ');
}



/**
 * Compare the Triplets
 @param {array} 
 @returns {array} - Array that includes the scores of two players
 ***************************************************************/

const compareTriplets = (a, b) => {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < a.length; i++) {
    (a[i] > b[i]) ?
      aliceScore += 1 :
      (a[i] < b[i]) ?
        bobScore += 1 :
        null;
  }

  return [aliceScore, bobScore];
}



/**
 * A Very Big Sum
 @param {array}
 @returns {number} - Return the sum of numbers in an array
 ***************************************************************/

const aVeryBigSum = ar => ar.reduce((acc, val) => acc += val);


// Test function: insert test functions here
function test() {
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]); // 5000000015
}

test();
