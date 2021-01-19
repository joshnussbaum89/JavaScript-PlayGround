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

// Test function: insert test functions here
function test() {
  calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) // ➞ "Abigail"
  calculateScore([["R", "R"], ["S", "S"]]) // ➞ "Tie"
  calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) // ➞ "Tie"
  calculateScore([['S', 'R'], ['P', 'R']]) // "Tie"
  calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']]) // "Abigail" 
  calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']]) // "Benson"
}

test();
