/*
Задача:
Дана функция, которая проверяет, является ли строка палиндромом. 
Палиндром — это слово или фраза, которая читается одинаково слева направо и справа налево, игнорируя пробелы и знаки препинания.
*/

const punctuations = [",", "?", ".", " ", "!", ")", "(", "*"];

const punctuationsMap = {
  ",": true,
  "?": true,
  ".": true,
  " ": true,
  "!": true,
  ")": true,
  "(": true,
  "*": true,
};

// O(n) - по памяти
function isPalidrom(str) {
  let isPalidrom = true;

  const noPunctStr = Array.from(str).filter(
    (symbol) => !punctuations.includes(symbol)
  );

  const reversedStr = [...noPunctStr].reverse();

  reversedStr.forEach((symbol, index) => {
    if (symbol.toLowerCase() !== noPunctStr[index].toLowerCase()) {
      isPalidrom = false;
    }
  });

  return isPalidrom;
}

// O(1) по памяти
function isPalidromEazy(str) {
  let firstIndex = 0;
  let lastIndex = str.length - 1;
  let isPalidrom = true;

  for (let i = 0; i < str.length - 1; i++) {
    if (punctuationsMap?.[str[firstIndex]]) {
      firstIndex++;
      continue;
    }

    if (punctuationsMap?.[str[lastIndex]]) {
      lastIndex--;
      continue;
    }

    if (str[firstIndex].toLowerCase() !== str[lastIndex].toLowerCase()) {
      isPalidrom = false;
      break;
    }
    firstIndex++;
    lastIndex--;
  }

  return isPalidrom;
}

console.log(isPalidrom("Do geese see God?"));
console.log(isPalidromEazy("Do gasdeese see God?"));
