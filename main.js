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

/**
 * Is Symmetrical
 * @param {int} num
 * @returns True or false depending on whether the number is the same normal as it is reversed
 */
const isSymmetrical = (num) => +[...num.toString()].reverse().join('') === num;

/**
 * Boolean to String
 * @param {bool} flag
 * @returns string value of boolean passed in as a parameter ex/ 'true' || 'false'
 */
const boolToString = (flag) => (flag === true ? 'true' : 'false');

/**
 * ASCII Charts (Part 1: Progress Bar)
 * @param {string} symbol
 * @param {int} progress
 * @returns Formatted string with progress bar and percentage
 */
const progressBar = (symbol, progress) => {
  let bar = '';
  const spaces = ' ';
  const amountLoaded = progress / 10;
  const amountNotLoaded = 10 - amountLoaded;

  for (let i = 0; i < amountLoaded; i++) {
    bar += symbol;
  }

  return progress === 100
    ? `|${bar}${spaces.repeat(amountNotLoaded)}| Completed!`
    : `|${bar}${spaces.repeat(amountNotLoaded)}| Progress: ${progress}%`;
};

/**
 * Century Crisis
 * @param {int} population
 * @param {int} n
 * @returns The number of people (population) in (n) years
 */
const futurePeople = (population, n) => population + n * 360;

/**
 * Range
 * @param {int} start
 * @param {int} end
 * @returns an array containing all the numbers from 'start' up to and including 'end'
 */
const range = (start, end, step = 1) => {
  let i, j;
  let interval = Math.abs(step);
  let arr = [];

  // Loop through start and end numbers based on interval
  const loopThroughNumbers = () => {
    for (i; i <= j; i += interval) {
      arr.push(i);
    }
  };

  // Ascending numbers
  if (end > start) {
    if (interval !== step) {
      return 'Please enter a positive step number!';
    } else {
      i = start;
      j = end;

      loopThroughNumbers();
    }
  }
  // Descending numbers
  else {
    if (interval === step && step !== 1) {
      return 'Please enter a negative step number!';
    } else {
      i = end;
      j = start;

      loopThroughNumbers();
    }
    arr.reverse();
  }

  return arr;
};

/**
 * Sum
 * @param {array} arr
 * @returns sum of numbers in an array
 */
const sum = (arr) => {
  return arr.reduce((acc, val) => acc + val);
};

/**
 * Reverse Array
 * @param {array} arr
 * @returns A new array that is in reverse order from the array passed in as an argument
 */
const reverseArray = (arr) => {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
};

/**
 * Reverse Array in Place
 * @param {array} arr
 * @returns the original array, modified to be returned in reverse order
 */
const reverseArrayInPlace = (arr) => {
  let reverseIndex = arr.length - 1;

  // keep track of items to be swapped
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    let innerElement = arr[i];
    let outerElement = arr[arr.length - 1 - i];

    // swap array items based on inner and outer indices
    arr.splice(i, 1, outerElement);
    arr.splice(reverseIndex, 1, innerElement);

    // every loop, 'i' is incremented and 'reverseIndex' is decremented
    reverseIndex--;

    // If array has even amount of items
    if (i === reverseIndex) break;
  }

  return arr;
};

const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
};

const listToArray = (list) => {
  let listArray = [];

  for (let node = list; node; node = node.rest) {
    listArray.push(node.value);
  }

  return listArray;
};

/**
 * Scrabble
 * @param {string} word
 * @returns The word entered but with Scrabble points calculated
 */
const scrabble = (word) => {
  const points = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  return [...word.toUpperCase()].reduce((acc, letter) => {
    return acc + points[letter];
  }, 0);
};

/**
 * Deep Equal
 * @param {object} objOne
 * @param {object} objTwo
 * @returns true if both arguments are completely equal
 */
function deepEqual(objOne, objTwo) {
  const objOneIsObject = typeof objOne === 'object' && objOne !== null;
  const objTwoIsObject = typeof objTwo === 'object' && objTwo !== null;
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  if (objOneIsObject && objTwoIsObject) {
    return JSON.stringify(objOneKeys) === JSON.stringify(objTwoKeys);
  } else {
    return objOne === objTwo;
  }
}

/**
 * Same Upside Down
 * @param {string} strNum
 * @returns boolean indicating whether number string is the same upside down as it is right side up
 */
const sameUpsidedown = (strNum) =>
  [...strNum]
    .reverse()
    .map((letter) => {
      if (letter === '9') {
        return letter.replace('9', '6');
      } else if (letter === '6') {
        return letter.replace('6', '9');
      }

      return letter;
    })
    .join('') === strNum;

/**
 * Is Valid Date
 * @param {number} d
 * @param {number} m
 * @param {number} y
 * @returns boolean indicating if arguments illustrate a valid date
 */
function isValidDate(d, m, y) {
  const date = new Date(y, m - 1, d);

  return date.getMonth() === m - 1;
}

/**
 * Median
 * @param {array} arr
 * @returns Median of array
 */
function median(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const firstMiddleNum = sortedArr[sortedArr.length / 2 - 1];
  const secondMiddleNum = sortedArr[sortedArr.length / 2];
  const middleNum = Math.floor(sortedArr.length / 2);

  if (arr.length % 2 === 0) {
    // even - get average of two middle numbers
    return (firstMiddleNum + secondMiddleNum) / 2;
  } else {
    // odd - return middle number
    return sortedArr[middleNum];
  }
}

/**
 * Which Is Larger
 * @param {function} f
 * @param {function} g
 * @returns The largest of the two values returned from the function arguments
 */
const whichIsLarger = (f, g) => {
  const [firstFunc, secondFunc] = [f(), g()];

  // if returned value is equal
  if (firstFunc === secondFunc) return 'neither';

  // check which returned value is bigger
  return firstFunc > secondFunc ? 'f' : 'g';
};

/**
 * Flatten
 * @param {array} arr
 * @returns A 'flattened' array - similar to the flat() method
 */
const flatten = (arr) => {
  return [...arr].reduce((a, b) => a.concat(b));
};

/**
 * Loop
 * -- Abstract a for loop into a more concise syntax
 * -- ex/ loop(3, (n) => n > 0, (n) => n - 1, console.log);
 * @param {any} value
 * @param {function} test
 * @param {function} update
 * @param {function} body
 */
const loop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
};

/**
 * Every
 * @param {array} array
 * @param {function} test
 * @returns Boolean indicating if every array item meets test() criteria
 */
const every = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }

  return true;
};

// prototypes
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// squared
Array.prototype.square = function () {
  return this.map((num) => Math.pow(num, 2));
};

// cubed
Array.prototype.cube = function () {
  return this.map((num) => Math.pow(num, 3));
};

// sum
Array.prototype.sum = function () {
  return this.reduce((currentValue, nextNum) => currentValue + nextNum, 0);
};

// average
Array.prototype.average = function () {
  return this.sum() / this.length;
};

// even
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

// odd
Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};

/**
 * Ip to Int32
 * @param {string} ip
 * @returns ip address written as a 32-bit number
 */
const ipToInt32 = (ip) => {
  const splitIp = ip.split('.');

  return splitIp.reduce((acc, cur) => console.log(acc * 256 + +cur), 0);
};

/**
 * Typing
 * @param {string} text
 * @param {number} speed - typing speed in ms
 * @description Create and render letters to DOM creating a 'typewriter' effect
 */
function typing(text, speed) {
  let textArr = [...text];
  let wordContainer = document.querySelector('.container');

  function createLetter(container, char) {
    // create a span for each letter and render to DOM
    let letter = document.createElement('span');
    letter.innerText = char;
    letter.classList.add('letter');
    container.appendChild(letter);

    // find last letter and add cursor to right hand side
    let lastLetter = container.lastElementChild;
    lastLetter.classList.add('last-letter');
    lastLetter.previousElementSibling.classList.remove('last-letter');
  }

  for (let i = 0; i < textArr.length; i++) {
    setTimeout(() => {
      createLetter(wordContainer, textArr[i]);
    }, i * speed);
  }
}

/**
 * Rank
 * @param {string} st
 * @param {array} we
 * @param {number} n
 * @returns winning name score
 */
function rank(st, we, n) {
  if (st.length === 0) return 'No participants';
  if (n > we.length) return 'Not enough participants';

  const alphabetObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
  };
  let names = st.split(',');
  let lettersArr = [];
  let nameLength;

  for (let i = 0; i < names.length; i++) {
    lettersArr.push(names[i].toLowerCase().split(''));
  }

  for (let i = 0; i < lettersArr.length; i++) {
    nameLength = lettersArr[i].length;
    lettersArr[i] = lettersArr[i].reduce((curr, next) => {
      return (curr += alphabetObj[next]);
    }, 0);
  }

  let som = lettersArr.map((num) => num + nameLength);
  let finalScores = [];

  for (let i = 0; i < som.length; i++) {
    finalScores.push({ name: names[i], score: som[i] * we[n] });
  }
  let sortedScores = finalScores.sort((a, b) => b.score - a.score);

  return sortedScores[0].name;
}

/**
 * Auto-Complete
 * @param {string} input
 * @param {array} dictionary
 * @returns array of matched items
 */
function autocomplete(input, dictionary) {
  let onlyLettersString = input.replace(/[^a-z]/gi, '');
  let matchedWords = [...dictionary].filter((word) =>
    word.toLowerCase().includes(onlyLettersString.toLowerCase())
  );

  return matchedWords.length > 5 ? matchedWords.slice(0, 5) : matchedWords;
}

/**
 * Odds vs. Evens
 * @param {number} num
 * @returns 'even' if the even sum is higher, 'odd' if odd sum is higher, 'equal' if sums are equal
 */
function oddsVsEvens(num) {
  const numArray = [...num.toString()].map((n) => +n);
  const evensSum = numArray
    .filter((n) => n % 2 === 0)
    .reduce((acc, next) => acc + next, 0);
  const oddsSum = numArray
    .filter((n) => n % 2 !== 0)
    .reduce((acc, next) => acc + next, 0);

  return evensSum > oddsSum ? 'even' : evensSum === oddsSum ? 'equal' : 'odd';
}

/**
 * Binary
 * @param {number} decimal
 * @returns Decimal number as a binary string
 */
function binary(decimal) {
  if (decimal === 0) return '0';

  let quotient = decimal;
  let binaryString = '';

  while (quotient !== 0) {
    if (quotient % 2 !== 0) {
      binaryString += '1';
    } else {
      binaryString += '0';
    }
    quotient = Math.floor(quotient / 2);
  }

  return [...binaryString].reverse().join('');
}

/**
 * Simple Comp
 * @param {array} arr1
 * @param {array} arr2
 * @returns true or false if arr1 contains the square root of numbers in arr2
 */
const simpleComp = (arr1, arr2) => {
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length !== arr2.length) return false;

  let absoluteArrayValues = [...arr1].map((num) => Math.abs(num));
  let boolArr = [];

  arr2.forEach((number) => {
    if (absoluteArrayValues.includes(Math.sqrt(number))) {
      let sqrtNumIndex = absoluteArrayValues.indexOf(Math.sqrt(number));
      absoluteArrayValues.splice(sqrtNumIndex, 1);
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  });

  return !boolArr.includes(false);
};

// Takes an [array] of var: names and returns first and last name initials
function returnFirstAndLastNameInitials(names) {
  return [...names].map(name => {
    const firtAndLastName = name.split(' ')
    const firstNameInitial = firtAndLastName[0][0]
    const lastNameInitial = firtAndLastName[1][0]

    return `${firstNameInitial}. ${lastNameInitial}.`
  })
}

// Creates a message that indicates who liked a post
function likes(names) {
  if ( names.length === 0 ) return `no one likes this`
  if ( names.length === 1 ) return `${names[0]} likes this`
  if ( names.length === 2 ) return `${names[0]} and ${names[1]} like this`
  if ( names.length === 3 ) return `${names[0]}, ${names[1]} and ${names[2]} like this`

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

// re-order words based on hidden number inside each word
function order(words) {
  if (words === '') return ''

  let eachIndividualWord = words.split(' ')
  let wordsInOrder       = new Array(eachIndividualWord.length).fill('')

  eachIndividualWord
    .map(word => /\d/.exec(word))
    .forEach(word => wordsInOrder.splice(word[0] - 1, 1, word.input))

  return wordsInOrder.join(' ')
}

// Abbreviate word ex/ "accessibility" --> "a11y"
function abbreviate(string) {
  const wordsWithoutDashes = string.replace('-', ' ').split(' ')
  let wordWithDash         = ''
  let abbreviatedWord      = ''
  let firstLetter
  let lastLetter
  let remainingLetters

  if (wordsWithoutDashes.length > 1) {
    let counter = 1

    wordsWithoutDashes.forEach(word => {
      firstLetter      = word[0]
      lastLetter       = word[word.length - 1]
      remainingLetters = word.length - 2

      wordWithDash += `${firstLetter}${remainingLetters}${lastLetter}`

      if (counter !== wordsWithoutDashes.length) {
        wordWithDash += '-'
        counter++
      }
    })

    return wordWithDash
  } else {
      wordsWithoutDashes.forEach(word => {
        firstLetter      = word[0]
        lastLetter       = word[word.length - 1]
        remainingLetters = word.length - 2

        abbreviatedWord += `${firstLetter}${remainingLetters}${lastLetter}`
      })

    return abbreviatedWord
  }
}

console.log(
  abbreviate("internationalization"), // "i18n"
  abbreviate("accessibility"),        // "a11y"
  abbreviate("Accessibility"),        // "A11y"
  abbreviate("elephant-ride"),         // "e6t-r2e"
);
