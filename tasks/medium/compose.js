/*
Задача:
Дано несколько простых функций: square (возводит число в квадрат), times2 (умножает на 2) и sum (суммирует два числа). 
Требуется написать функцию compose, которая позволяет комбинировать несколько функций в одну, выполняя их последовательно справа налево.
*/

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));

function compose(...functions) {
  return function (...params) {
    return functions.reduceRight((acc, func) => {
      return Array.isArray(acc) ? func(...acc) : func(acc);
    }, params);
  };
}
