/*
Задача:
Дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа,
которые можно получить путём перестановки цифр их составляющих.
Нули при этом игнорируем, т.к. нет числа 011.
Решение должно быть максимально эффективно по памяти и времени.
*/

// O(N * K)
// O(N * K log K) - Думает ChatGPT. Сортировка цифр (не более k штук) — O(k log k).
function digitPermutation(arr) {
  const mapa = {};

  arr.forEach((num) => {
    const filteredZeroNumber = Array.from(String(num))
      .filter((str) => str !== "0")
      .sort()
      .join();

    mapa[filteredZeroNumber]
      ? mapa[filteredZeroNumber].push(num)
      : (mapa[filteredZeroNumber] = [num]);
  });

  return Object.values(mapa);
}

console.log(
  digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9])
);
// [ [99, 90000009], [111, 101010], [123, 23001, 300021], [9] ]

console.log(digitPermutation([11, 22]));
// [[11], [22]]

console.log(digitPermutation([11111111112, 122222222222]));
// [[11111111112], [122222222222]]
