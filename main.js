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

function test() {
  capToFront("hApPy"); // ➞ "APhpy"
  capToFront("moveMENT"); //  ➞ "MENTmove"
  capToFront("shOrtCAKE"); // ➞ "OCAKEshrt"
}

test();
