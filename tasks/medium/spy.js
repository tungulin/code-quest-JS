/*
Задача:
Напишите функцию spy, которая принимает другую функцию f и возвращает её модификацию (обёртку), которая ведёт учёт всех её вызовов. 
Модифицированная функция должна:
  Подсчитывать количество вызовов исходной функции.
  Записывать все аргументы, с которыми была вызвана функция.
  Записывать все результаты, возвращаемые исходной функцией.
  Позволять получить информацию о том, сколько раз была вызвана функция, какие аргументы передавались и какие результаты были получены.
*/

function sum(a, b) {
  return a + b;
}

function spy(f) {
  let calls = 0;
  const args = [];
  const results = [];

  let obj = function (...params) {
    args.push(params);
    const result = f(...params);
    obj.data.calls += 1;
    results.push(result);
    return result;
  };

  obj.data = {
    calls: 0,
    args,
    results,
  };

  return obj;
}

const sum2 = spy(sum);
console.log(sum2(2, 2)); // 4
console.log(sum2(21, 21)); // 42

// Количество вызовов функции sum
console.log(sum2.data.calls); // 2

// Аргументы, с которыми была вызвана функция sum, с сохранением порядка вызовов
console.log(sum2.data.args); // [[2, 2], [21, 21]]

// Результаты, которые вернула функция sum, с сохранением порядка вызовов
console.log(sum2.data.results); // [4, 42]
