/*
Задача:
Вам задана строка, состоящая из латинских букв, пробелов и знаков препинания.
Строка называется панграммой, если она содержит каждую из 26 латинских
букв хотя бы раз. Определите является ли строка панграммой.
*/

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function isPangram(text) {
  let letters = [...LETTERS];
  const textArr = Array.from(text);
  let _isPangram = false;

  for (let i = 0; i < textArr.length; i++) {
    const isIncluded = letters.includes(textArr[i].toUpperCase());

    if (isIncluded) {
      letters = letters.filter((letter) => letter !== textArr[i].toUpperCase());

      if (letters.length === 0) {
        _isPangram = true;
        break;
      }
    }
  }

  return _isPangram;
}

console.log(
  isPangram(
    "A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once."
  )
); // => false
console.log(isPangram("Waltz, bad nymph, for quick jigs vex.")); // => true
