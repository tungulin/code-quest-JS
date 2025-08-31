/**
 * Задача:
 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 */

const transformTo = (arr) => {
  return arr.length > 1 ? `${arr[0]}-${arr[arr.length - 1]}` : String(arr[0]);
};

function compress(list) {
  const sortedList = list.sort((a, b) => a - b);

  const mapa = {};
  let indexNum = sortedList[0];
  mapa[indexNum] = [];

  for (let i = 0; i < sortedList.length; i++) {
    const num = sortedList[i];
    const currentArr = mapa[indexNum];
    const lastNum = currentArr[currentArr.length - 1];

    if (num - lastNum === 1) {
      currentArr.push(num);
    } else {
      indexNum = num;
      mapa[indexNum] = [indexNum];
    }
  }

  return Object.values(mapa).map(transformTo).join(",");
}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0–5,8–9,11";
console.log(compress([1, 4, 3, 2])); // "1–4"
console.log(compress([1, 4])); // "1,4"
console.log(compress([1, 2])); // "1–2"
