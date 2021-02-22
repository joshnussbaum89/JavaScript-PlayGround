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



// ELOQUENT JAVASCRIPT EXERCISES 

/**
 * Draw a triangle
 @param {str}
 @returns Returns a console.log of a hash triangle
 ***************************************************************/

function drawTriangle(str) {
  for (let i = 0; i < 7; i++) {
    console.log(str += '#');
  }
}


/**
 * Fizz Buzz 
 @returns Returns a console.log of every number from 1-100 
 1. If number is divisible by 5 and 3, return 'fizzBuzz'
 2. If number is divisible by 5 and NOT 3, return 'buzz'
 3. If number is divisible by only 3, return 'fizz'
 4. Else return integer 
 ***************************************************************/

function fizzBizz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzBuzz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}


/**
 * Draw a triangle
 @param {number} 
 @returns Returns a console.log of a chessboard. Size based on the function argument number.
 ***************************************************************/

function drawChessBoard(sizeNum) {
  const evenStringHash = ' #';
  const oddStringHash = '# ';

  for (let i = 0; i < sizeNum; i++) {
    if (i % 2 == 0) {
      console.log(evenStringHash.repeat(sizeNum));
    } else if (i % 2 != 0) {
      console.log(oddStringHash.repeat(sizeNum));
    }
  }
}


/**
 * Draw a garden
 @param {number} 
 @returns Returns a console.log of a garden. Size based on the function argument number.
 ***************************************************************/

const drawGarden = num => {
  const trees = [' 🌳', ' 🌲', ' 🎋', ' 🌴', ' 🎄'];
  const flowers = [' 🌺', ' 🌻', ' 🌷', ' 🌸', ' 🌹'];

  for (let i = 0; i < num; i++) {
    (i % 2 == 0)
      ? console.log(trees[Math.floor(Math.random() * trees.length)].repeat(num))
      : console.log(flowers[Math.floor(Math.random() * flowers.length)].repeat(num));
  }
}



/**
 * Plus Minus
 @param {arr} numbers 
 @returns Returns 3 console.logs of numbers. Checks if number is positive, negative or zero
 ***************************************************************/

const plusMinus = arr => {
  const positiveNumbers = arr.filter(num => num > 0);
  const negativeNumbers = arr.filter(num => num < 0);
  const zeroNumbers = arr.filter(num => num === 0);

  const positivePercentage = (positiveNumbers.length / arr.length).toFixed(6);
  const negativePercentage = (negativeNumbers.length / arr.length).toFixed(6);
  const zeroPercentage = (zeroNumbers.length / arr.length).toFixed(6);

  console.log(positivePercentage);
  console.log(negativePercentage);
  console.log(zeroPercentage);
};



/**
 * Diagonal Difference
 @param {arr} array of arrays 
 @returns absolute difference between the sums of its diagonals
 ***************************************************************/

const diagonalDifference = arr => {
  const arrLength = arr.length;
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i === j) {
        diag1 += arr[i][j];
      }
      if (i + j === arrLength - 1) {
        diag2 += arr[i][j];
      }
    }
  }

  return Math.abs(diag1 - diag2);
}



/**
 * Draw a staircase
 @param {number} 
 @returns returns a console.log of a reversed staircase
 ***************************************************************/

const staircase = n => {
  let space = ' ';
  let topStair = space.repeat(n - 1).split('');
  topStair.push('#');
  console.log(topStair.join(''));

  for (let i = n; i > 1 && i <= n; i--) {
    let isHash = element => element === '#';
    let found = topStair.findIndex(isHash);
    topStair.splice(found - 1, 1, '#');
    console.log(topStair.join(''));
  }
};



/**
 * Minimum + Maximum Sums from lowest and highest numbers in an array
 @param {array} array of 5 numbers
 @returns returns a console.log of highest and lowest sum
 ***************************************************************/

const miniMaxSum = (array) => {
  // make two copies of original array
  const array1 = [...array];
  const array2 = [...array];

  // return array of lowest 4 numbers
  const sortedLowToHigh = (arr) => {
    arr.sort((a, b) => a - b);
    const smallestNums = arr.splice(0, 4);
    return smallestNums;
  }

  // return array of highest 4 numbers
  const sortedHighToLow = (arr) => {
    arr.sort((a, b) => b - a);
    const largestNums = arr.splice(0, 4);
    return largestNums;
  }

  // add lowest numbers and highest numbers together
  const smallestNums = sortedLowToHigh(array1);
  const largestNums = sortedHighToLow(array2);
  const smallSum = smallestNums.reduce((total, num) => total += num);
  const largeSum = largestNums.reduce((total, num) => total += num);

  // print sums
  console.log(smallSum, largeSum);
};



/**
 * Count amount of tallest birthday candles
 @param {array} array of candle lengths
 @returns returns the amount of tallest birthday candles from array
 ***************************************************************/

function birthdayCakeCandles(candles) {
  // sort highest to lowest
  candles.sort((a, b) => b - a);

  // save 1st number to a 'highest' variable 
  const highest = candles[0];

  // filter through and compare each number to 'highest'
  // if number is equal to 'highest'
  const tallestCandles = candles.filter(candle => candle === highest);

  // return filtered array length
  return tallestCandles.length;
}



/**
 * Time Conversion
 @param {string} string representing time in 12-hour format
 @returns military time
 ***************************************************************/

const timeConversion = timeString => {
  const PM = timeString.match('PM') ? true : false;
  timeString = timeString.split(':');
  const min = timeString[1];

  let hour;
  let sec;

  if (PM) {
    hour = timeString[0];

    if (+hour === 12) {
      hour = '12';
    } else {
      hour = 12 + (+timeString[0]);
    }

    sec = timeString[2].replace('PM', '');
  } else {
    hour = timeString[0];

    if (+hour === 12) {
      hour = '00';
    }

    sec = timeString[2].replace('AM', '');
  }

  return `${hour}:${min}:${sec}`;
}


//Test function: insert test functions here
function test() {
  console.log(timeConversion('01:00:00AM'));
}

test();
