/*
Задача:
Напишите функцию createCounter, которая создает объект с тремя методами:
  1. increment() — увеличивает счетчик на 1 и возвращает его новое значение.
  2.decrement() — уменьшает счетчик на 1 и возвращает его новое значение.
  3. reset() — сбрасывает счетчик к первоначальному значению, переданному при создании, и возвращает его.
*/

function createCounter(init) {
  let counter = init;

  let fucntions = {
    increment: () => {
      counter++;
      return counter;
    },
    decrement: () => {
      counter--;
      return counter;
    },
    reset: () => {
      counter = init;
      return counter;
    },
  };

  return fucntions;
}

const counter = createCounter(0);

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
