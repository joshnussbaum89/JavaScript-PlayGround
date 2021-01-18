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

// Test function: insert test functions here
function test() {
  encode('hello'); // 'h2ll4'
  encode('How are you today?'); // 'H4w 1r2 y45 t4d1y?'
  encode('This is an encoding test.'); // 'Th3s 3s 1n 2nc4d3ng t2st.'
  decode('h2ll4'); // 'hello'
}

test();
