/**
 * Задача:
 * Дана строка, содержащая буквы //A–Z//:
 * "AAB3C2XY2DDDDDEEEFFFAAAAABBBBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая выведет строку вида:
 * "A4B3C2XY2D4E3F3A6B20"
 *
 * Примечания:
 * 1. Если символ встречается один раз, он остается неизменным
 * 2. Если символ встречается более одного раза, к нему добавляется число повторений
 */

function rle(str) {
  const map = new Map();
  let result = "";

  Array.from(str).forEach((char) => {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  });

  Array.from(map.keys()).forEach((char) => {
    result += map.get(char) > 1 ? `${char}${map.get(char)}` : char;
  });

  return result;
}

console.log(rle("A")); // A
console.log(rle("AAAB")); // A3B
console.log(rle("ABCCC")); // ABC3
