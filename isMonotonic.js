/**
 * Задача:
 * Написать функцию, которая принимает массив чисел.
 * Необходимо определить монотонный он или нет.
 * Монотонные числа — это такие числа (или последовательности чисел), которые либо неубывают, либо не возрастают на протяжении всей своей длины.
 */

function isMonotonic(numbers) {
  if (numbers.length === 1) {
    return true;
  }

  let isMonotonic = true;
  let currentValue = numbers[0];
  let isPositive = numbers[0] >= numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (isPositive) {
      if (numbers[i] > currentValue) {
        isMonotonic = false;
        break;
      }
    } else {
      if (numbers[i] < currentValue) {
        isMonotonic = false;
        break;
      }
    }
    currentValue = numbers[i];
  }

  return isMonotonic;
}

console.log(isMonotonic([1, 2, 3, 6])); // true
console.log(isMonotonic([6, 3, 3, 2, 1])); // true
console.log(isMonotonic([1, 1, 1])); // true
console.log(isMonotonic([1, 10, 6])); // false
