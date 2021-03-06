/**
 * function that takes a word and moves capital letters to front
 @param {string} word
 @return {string}
 * capital letters moved to front of word
 ***************************************************************/

function capToFront(word) {
  const letters = word.split('');

  const capLetters = letters.filter(
    (letter) => letter === letter.toUpperCase()
  );
  const lowerLetters = letters.filter(
    (letter) => letter === letter.toLowerCase()
  );

  const joinCapitalLetters = capLetters.join('');
  const joinLowerLetters = lowerLetters.join('');

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

  games.forEach((game) => {
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
  });

  return abigailWins > bensonWins
    ? 'Abigail'
    : abigailWins < bensonWins
    ? 'Benson'
    : 'Tie';
}

/**
 * Return letters only from a string
 @param {string} letters/numbers/symbols
 @return {string} return 'decoded' string ex/ "R!=:~0o0./c&}9k`60=y" => "Rocky"
 ***************************************************************/

const lettersOnly = (str) => str.replace(/[^A-Za-z]/g, '');

/**
 * Sort Numbers in descending order
 @param {number}
 @return {number} return reversed number
 ***************************************************************/

const sortDescending = (num) => {
  +num.toString().split('').sort().reverse().join('');
};

/**
 * Reverse the Case
 @param {string}
 @return {string} return reversed case => lower case = uppercase and vice versa
 ***************************************************************/

const reverseCase = (str) =>
  str
    .split('')
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join('');

/**
 * Hiding the Card Number
 @param {string} Card# - Card number as a string
 @returns {string} Same string with only the last four digits showing, replacing everything else with asterisks
 ***************************************************************/

function cardHide(card) {
  const hidden = '*';
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

  sentence.search('nemo') && nemoIndex !== 0
    ? (message = `I found Nemo at ${nemoIndex}!`)
    : (message = "I can't find Nemo :(");

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

  const middleCharacters =
    strCharLength % 2 === 0
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

  const newArr = eachWord.map((word) => {
    if (word.length % 2 !== 0) {
      return word.split('').reverse().join('');
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
    a[i] > b[i] ? (aliceScore += 1) : a[i] < b[i] ? (bobScore += 1) : null;
  }

  return [aliceScore, bobScore];
};

/**
 * A Very Big Sum
 @param {array}
 @returns {number} - Return the sum of numbers in an array
 ***************************************************************/

const aVeryBigSum = (ar) => ar.reduce((acc, val) => (acc += val));

// ELOQUENT JAVASCRIPT EXERCISES

/**
 * Draw a triangle
 @param {str}
 @returns Returns a console.log of a hash triangle
 ***************************************************************/

function drawTriangle(str) {
  for (let i = 0; i < 7; i++) {
    console.log((str += '#'));
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

function fizzBuzz() {
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

const drawGarden = (num) => {
  const trees = [' 🌳', ' 🌲', ' 🎋', ' 🌴', ' 🎄'];
  const flowers = [' 🌺', ' 🌻', ' 🌷', ' 🌸', ' 🌹'];

  for (let i = 0; i < num; i++) {
    i % 2 == 0
      ? console.log(trees[Math.floor(Math.random() * trees.length)].repeat(num))
      : console.log(
          flowers[Math.floor(Math.random() * flowers.length)].repeat(num)
        );
  }
};

/**
 * Plus Minus
 @param {arr} numbers
 @returns Returns 3 console.logs of numbers. Checks if number is positive, negative or zero
 ***************************************************************/

const plusMinus = (arr) => {
  const positiveNumbers = arr.filter((num) => num > 0);
  const negativeNumbers = arr.filter((num) => num < 0);
  const zeroNumbers = arr.filter((num) => num === 0);

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

const diagonalDifference = (arr) => {
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
};

/**
 * Draw a staircase
 @param {number}
 @returns returns a console.log of a reversed staircase
 ***************************************************************/

const staircase = (n) => {
  let space = ' ';
  let topStair = space.repeat(n - 1).split('');
  topStair.push('#');
  console.log(topStair.join(''));

  for (let i = n; i > 1 && i <= n; i--) {
    let isHash = (element) => element === '#';
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
  };

  // return array of highest 4 numbers
  const sortedHighToLow = (arr) => {
    arr.sort((a, b) => b - a);
    const largestNums = arr.splice(0, 4);
    return largestNums;
  };

  // add lowest numbers and highest numbers together
  const smallestNums = sortedLowToHigh(array1);
  const largestNums = sortedHighToLow(array2);
  const smallSum = smallestNums.reduce((total, num) => (total += num));
  const largeSum = largestNums.reduce((total, num) => (total += num));

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
  const tallestCandles = candles.filter((candle) => candle === highest);

  // return filtered array length
  return tallestCandles.length;
}

/**
 * Time Conversion
 @param {string} string representing time in 12-hour format
 @returns military time
 ***************************************************************/

const timeConversion = (timeString) => {
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
      hour = 12 + +timeString[0];
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
};

/**
 * Grading Students
 @param {array} array of student grades
 @returns array of grades rounded to nearest multiple of 5 if it's within 2 numbers of nearest multiple of 5
 failing grade is lower than 38
 ***************************************************************/

function gradingStudents(grades) {
  const roundedGrades = grades.map((grade) => {
    // round to nearest multiple of 5
    const rounded = Math.ceil(grade / 5) * 5;
    // make sure difference is less than 3 and higher than 38
    const canBeRounded = rounded - grade < 3 && grade >= 38;
    // check boolean value
    if (canBeRounded) {
      return rounded;
    } else {
      return grade;
    }
  });
  // return either rounded grade or original grade
  return roundedGrades;
}

/**
 * Detect Browser
 @param {string} string
 @returns Browser name
 ***************************************************************/

function detectBrowser(userAgent) {
  if (userAgent.includes('Chrome')) {
    return 'Google Chrome';
  } else if (userAgent.includes('Firefox')) {
    return 'Mozilla Firefox';
  } else {
    return 'Internet Explorer';
  }
}

/**
 * Evens or Odds
 @param {string} string of numbers
 @returns indication of whether the sum of even numbers or odd numbers is larger
 ***************************************************************/

const evenOrOdd = (str) => {
  const individualNumStrings = str.split('');
  const individualNumIntegers = individualNumStrings.map((number) => +number);

  const evenSum = individualNumIntegers
    .filter((number) => number % 2 === 0)
    .reduce((a, b) => a + b);

  const oddSum = individualNumIntegers
    .filter((number) => number % 2 !== 0)
    .reduce((a, b) => a + b);

  return oddSum > evenSum
    ? 'Odd is greater than Even'
    : evenSum > oddSum
    ? 'Even is greater than Odd'
    : 'Even and Odd are the same';
};

/**
 * Clone an array
 @param {array} array
 @returns new array that contains original array ex/ [1, 1, [1, 1]]
 ***************************************************************/

const clone = (arr) => [...arr, arr];

/**
 * Find the Highest Integer in the Array Using Recursion
 * @param {array} arr array of numbers
 * @return findHighest function until highest number is found
 */

const findHighest = (arr) => {
  if (arr.length === 1) return arr[0];
  if (arr[0] > arr[1]) arr[1] = arr[0];
  arr = arr.splice(1);
  return findHighest(arr);
};

/**
 * Pi to N Decimal Places
 * @param {number} n number
 * @return PI to N Decimal Places
 */

const myPi = (n) => +Math.PI.toFixed(n);

/**
 * Return highest individual number within a multi-digit number
 * @param {number} number
 * @return highest number
 */

const highestDigit = (number) => {
  const numArrayStrings = number.toString().split('');
  const numArrayInts = numArrayStrings.map((num) => +num);

  return Math.max(...numArrayInts);
};

/**
 * Family Tree Function
 * @param {int} number indicating where in the family tree this person is ex/ father, grandfather, great grandfather etc.
 * @param {string} letter idicates sex
 */

const generation = (x, y) => {
  const family = {
    '-3': {
      m: 'great grandfather',
      f: 'great grandmother',
    },
    '-2': {
      m: 'grandfather',
      f: 'grandmother',
    },
    '-1': {
      m: 'father',
      f: 'mother',
    },
    0: {
      m: 'me!',
      f: 'me!',
    },
    1: {
      m: 'son',
      f: 'daughter',
    },
    2: {
      m: 'grandson',
      f: 'granddaughter',
    },
    3: {
      m: 'great grandson',
      f: 'great granddaughter',
    },
  };
  return family[x][y];
};

/**
 * How Good is Your Name?
 * @param {string} name
 * @returns calculated score of name quality by adding up individual letters
 */

function nameScore(name) {
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };

  const score = [...name].reduce((a, b) => {
    return scores[b] ? a + scores[b] : null;
  }, 0);

  return score <= 60
    ? 'NOT TOO GOOD'
    : 61 <= score && score <= 300
    ? 'PRETTY GOOD'
    : 301 <= score && score <= 599
    ? 'VERY GOOD'
    : score >= 600
    ? 'THE BEST'
    : null;
}

/**
 * Array operation that determines what numbers between "x" and "y", if any, are divisible by "n"
 * @param {int} x Starting number
 * @param {int} y Highest number
 * @param {int} n Number to divide by
 * @returns Array including any numbers that are divisible by "n"
 */

const arrayOperation = (x, y, n) => {
  const nums = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) nums.push(i);
  }
  return nums;
};

/**
 * Number to Array
 * @param {int} num
 * @returns original number split into array of individual integers
 */
const toArray = (num) =>
  num
    .toString()
    .split('')
    .map((num) => +num);

/**
 * Number to Array
 * @param {array} array
 * @returns original array of integers joined into one number
 */
const toNumber = (arr) => +arr.map((num) => num.toString()).join('');

/**
 * Count Ones in a 2D Array
 * @param {array} matrix
 * @returns ones in 2D Array
 */
const countOnes = (matrix) => {
  let ones = 0;

  matrix.forEach((num) => {
    num.forEach((num) => (num === 1 ? (ones += 1) : null));
  });

  return ones;
};

/**
 * Prevent new properties from being added to a given object.
 * @param {object} obj
 * @returns original object, unchanged.
 */
function signYourName(obj) {
  Object.seal(obj);
  obj.yourSignature = 'Whatever';
  obj.spouseSignature = 'Nice Try';
  return obj;
}

/**
 * Omnipresent Value
 * @param {array} arr array of integer arrays
 * @param {int} val number to check against
 * @returns boolean indicating if every array includes the "val" it's checked against
 */
const isOmnipresent = (arr, val) =>
  arr
    .map((array) => array.includes(val))
    .every((currentValue) => currentValue === true);

/**
 * Syncopated Rhythm
 * @param {*} s string of periods and hashes
 * @returns true if hashed land on an even numbered beat (2, 4, etc.)
 */
const hasSyncopation = (s) => {
  const stringArray = [...s];

  return stringArray.some((char, index) => {
    return char === '#' && (index + 1) % 2 === 0;
  });
};

/**
 * Snail Goes Up The Stairs
 * @param {*} height
 * @param {*} length
 * @param {*} tower
 * @returns The distance one would travel going up a starcase
 */
const totalDistance = (height, length, tower) => {
  const numberOfStairs = tower / height;
  const distanceForEachStair = height + length;
  const totalDistanceTraveled = +(
    numberOfStairs * distanceForEachStair
  ).toFixed(1);

  return totalDistanceTraveled;
};

function makesTen(a, b) {
  return a + b === 10 || a === 10 || b === 10;
}

/**
 * Even or Odd Number of Factors
 * @param {int} num
 * @returns "odd" or "even"
 */
const factorGroup = (num) =>
  Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';

/**
 * Determine how many walls one can paint by determining surface areas
 * @param {int} n number of square meters of available paint
 * @param {*} w width (meters) of a single wall
 * @param {*} h height (meters) of a single wall
 */
const howManyWalls = (n, w, h) => {
  const wallSize = w * h;
  const wallsYouCanPaint = Math.floor(n / wallSize);

  return wallsYouCanPaint;
};

/**
 * Nth Even Number
 * @param {int} num
 * @returns the nth even number
 */
const nthEven = (num) => num * 2 - 2;

/**
 * Calculate landmass percentage of a country in relation to worlds landmass
 * @param {string} name
 * @param {int} area
 * @returns [name] is [countryMassFormattedStr]% of the total world's landmass
 */
const areaOfCountry = (name, area) => {
  let countryMass = (area / 148940000).toFixed(4);
  let countryMassStr;

  if (countryMass[2] === '0') {
    countryMassStr = countryMass.substring(3);
  } else {
    countryMassStr = countryMass.substring(2);
  }

  let countryMassArr = [...countryMassStr];

  if (countryMassArr.length === 3) {
    countryMassArr.splice(1, 0, '.');
  } else {
    countryMassArr.splice(2, 0, '.');
  }

  const countryMassFormattedStr = parseFloat(countryMassArr.join(''));

  return `${name} is ${countryMassFormattedStr}% of the total world's landmass`;
};

/**
 * Adds number to end of array and removes number from beginning of array
 * @param {arr} arr
 * @param {int} num
 * @returns Modified array
 */
const nextInLine = (arr, num) => {
  if (arr.length > 0) {
    arr.push(num);
    arr.shift();
    return arr;
  } else {
    return 'No array has been selected';
  }
};

/**
 * Is This a Right Angled Triangle?
 * @param {int} x
 * @param {int} y
 * @param {int} z
 * @returns boolean
 */
function rightTriangle(x, y, z) {
  const [a, b, c] = [x, y, z].sort((a, b) => a - b);
  const aSquared = Math.pow(a, 2);
  const bSquared = Math.pow(b, 2);
  const cSquared = Math.pow(c, 2);

  if (aSquared <= 0 || bSquared <= 0 || cSquared <= 0) return false;

  return aSquared + bSquared == cSquared;
}

/**
 * Total Sales of Product
 * @param {arr} sales
 * @param {string} product
 * @returns How many items were sold
 */
const totalSales = (sales, product) => {
  const itemIndex = sales[0].indexOf(product);
  let count = 0;
  let response;

  for (let i = 1; i < sales.length; i++) {
    count += sales[i][itemIndex];
  }

  itemIndex === -1 ? (response = 'Product not found') : (response = count);
  return response;
};

/**
 * Check if string is the same backwards as it is forwards
 * @param {string} str
 * @returns {boolean} true or false
 */
const checkPalindrome = (str) => str === str.split('').reverse().join('');

/**
 * Array indexing
 * @param {array} arr
 * @param {int} i
 * @returns value at given index
 */
const valueAt = (arr, i) => arr[Math.floor(i)];

/**
 * Matchstick Houses
 * @param {int} step
 * @returns number of matches used to connect steps (houses)
 */
const matchHouses = (step) => (step === 0 ? 0 : step * 5 + 1);

/**
 * Return Negative
 * @param {int} n negative or positive number
 * @returns If n is positive, return the negative of that number. Otherwise just return n
 */
const returnNegative = (n) => (n > 0 ? n * -1 : n);

/**
 * @param {string} str
 * @returns string without 'fog' letters in it
 */
const clearFog = (str) => {
  const regex = /[fogFOG]/gm;

  return regex.test(str)
    ? [...str].map((char) => char.replace(regex, '')).join('')
    : "It's a clear day!";
};

/**
 * Covert to Decimal Notation
 * @param {array} perc array of percentage strings
 * @returns array with percentages coverted to decimal notation
 */
const convertToDecimal = (perc) =>
  perc.map((num) => parseFloat(num.replace('%', ' ')) / 100);

/**
 * Sum of Resistance in Series Circuits
 * @param {array} arr array of values resistance that are connected in series
 * @returns total resistance of the circuit in 'ohms'
 */
const seriesResistance = (arr) => {
  let message;

  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  total <= 1 ? (message = `${total} ohm`) : (message = `${total} ohms`);

  return message;
};

/**
 * Leap Year
 * @param {int} year
 * @returns true or false depending on whether or not 'year' is a leap year
 */
const leapYear = (year) => year % 4 === 0;

/**
 * Find lowest and highest number in array
 * @param {array} arr
 * @returns lowest and highest number in new array
 */
const minMax = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  const lowestNumInArray = sortedArray[0];
  const highestNumInArray = sortedArray[sortedArray.length - 1];

  return [lowestNumInArray, highestNumInArray];
  // Or just use Math.min(...arr) and Math.max(...arr)
};

/**
 * Miserable parody of a calculator
 * @param {*} str
 * @returns evaluated math expression
 */
function calculator(str) {
  return eval(str);
}

/**
 * @param {array} arr
 * @returns Absolute sum of array
 */
const getAbsSum = (arr) => {
  const absoluteSum = arr
    .map((num) => (Math.sign(num) === -1 ? Math.abs(num) : num))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return absoluteSum;
};

/**
 * Lodash function
 * @param {array} arr
 * @param {int} num
 * @returns same array with specified number (num) of items removed
 */
function dropRight(arr, num = 1) {
  for (let i = 0; i < num; i++) {
    arr.pop();
  }

  return arr;
}

/**
 * Count Letter in string
 * @param {string} string
 * @param {string} letter
 * @returns the amount of letters 'letter' in a string 'string'
 */
function countLetters(string, letter) {
  return [...string].filter((char) => char === letter).length;
}

/**
 * if 'a' is less than 6 (dice roll) away from 'b', it's possible to catch up to 'b' with a dice roll
 * @param {number} a
 * @param {number} b
 * @returns true or false
 */
function possibleBonus(a, b) {
  return b - a <= 6 && b - a >= 1;
}

/**
 * Reverse Psychology
 * @param {string} string
 * @returns the opposite of what the strings command is
 */
function reversePsychology(string) {
  const doNot = 'Do not ';

  if (!string) {
    return 'Do not do anything.';
  } else {
    return doNot.concat(`${string}.`);
  }
}

/**
 * isAvgWhole
 * @param {array} arr
 * @returns whether or not average of numbers in given array is a whole number
 */
const isAvgWhole = function (arr) {
  const sumOfArrayElements = arr.reduce((num, acc) => (num += acc));
  const isWholeNumber = sumOfArrayElements % arr.length === 0;

  return isWholeNumber;
};

/**
 * Rock Paper Scissors function
 */
function rockPaperScissors() {
  const moves = ['⛰️', '🧻', '✂️'];
  const movesWords = ['rock', 'paper', 'scissors'];
  const randomNum = Math.ceil(Math.random() * moves.length - 1);

  for (let i = 0; i < movesWords.length; i++) {
    setTimeout(() => {
      console.log(movesWords[i]);
    }, i * 1000);
  }

  setTimeout(() => {
    console.log('shoot: ', moves[randomNum]);
  }, 3000);
}

/**
 * Find longest word in sentence
 * @param {string} sentence
 * @returns longest word
 */
const longestWord = (sentence) => {
  const sortedWordsObj = sentence
    .split(' ')
    .map((word) => {
      return { word, wordLength: word.length };
    })
    .sort((a, b) => a.wordLength - b.wordLength);

  const wordLengthsArr = sortedWordsObj.map((word) => word.wordLength);
  const biggestNumber = wordLengthsArr[wordLengthsArr.length - 1];
  const biggestWord = sortedWordsObj.find(
    (word) => word.wordLength == biggestNumber
  ).word;

  return biggestWord;
};

/**
 * Personal finance strategy
 * @param {integer} ati
 * @returns an object containing a personal finance strategy for needs, wants and savings
 */
const fiftyThirtyTwenty = (ati) => {
  const fiftyPercent = ati * 0.5;
  const thirtyPercent = ati * 0.3;
  const twentyPercent = ati * 0.2;

  return {
    Needs: fiftyPercent,
    Wants: thirtyPercent,
    Savings: twentyPercent,
  };
};

/**
 * Single Occurrence
 * @param {string} str
 * @returns Element in string that only occurs once
 */
function singleOccurrence(str) {
  let uppercaseStr = str.toUpperCase();
  let strArr = [...uppercaseStr];

  return strArr
    .sort()
    .join('')
    .replace(/(\w)\1+/g, '')
    .substr(0, 1);
}

/**
 * Years In One House
 * @param {number} age
 * @param {number} moves
 * @returns Number of years lived in each house depending on how many times person moved
 */
const yearsInOneHouse = (age, moves) => Math.round(age / (moves + 1));

// Test function: insert test functions here
function test() {
  console.log(
    yearsInOneHouse(30, 1), // ➞ 15
    yearsInOneHouse(15, 2), // ➞ 5
    yearsInOneHouse(80, 0) // ➞ 80
  );
}

test();
