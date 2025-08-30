/*
Задача:
Напишите функцию timeLimit, которая ограничивает время выполнения асинхронной функции. Функция должна принимать два параметра:
Асинхронную функцию fn, которая возвращает промис.
Время t (в миллисекундах), в течение которого должна выполниться функция.
Если функция выполняется дольше, чем указано в параметре t, она должна быть отклонена с ошибкой "Time Limit Exceeded". Если функция выполняется вовремя, её результат должен быть возвращён.
Кроме того, напишите оптимизированную версию этой функции timeLimitWithoutNewPromise, которая использует Promise.race для того, чтобы избежать создания лишних промисов.
*/

function timeLimit(fn, t) {
  let timerId = null;

  return function (...args) {
    return new Promise((resolve, reject) => {
      timerId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args).then((resp) => {
        clearTimeout(timerId);
        resolve(resp);
      });
    });
  };
}

function timeLimitWithoutNewPromise(fn, t) {
  return async function (...args) {
    return Promise.race([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      }),
      fn(...args),
    ]);
  };
}

const asyncFn = async (a, b) => {
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 100));
  return a + b;
};

const limitFn = timeLimitWithoutNewPromise(asyncFn, 1010);

limitFn(1, 2)
  .then((res) => console.log("res", res))
  .catch((err) => console.log("Err:", err));
