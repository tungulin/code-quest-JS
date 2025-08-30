/*
Задача:
Тробуется написать свою реализацию Promise.AllSettled, функция принимает массив значений, которые могут быть как промисами, так и обычными значениями, и возвращает массив с результатами выполнения всех этих значений. 
Для каждого элемента массива необходимо создать объект с полями:
  status — статус выполнения, который может быть fulfilled (выполнено успешно) или rejected (выполнено с ошибкой).
  value — если промис был успешно выполнен, то это его результат, если же промис отклонен — то причина отклонения.
Если элемент не является промисом, то он считается успешно выполненным значением (fulfilled), и его значение записывается в результат.
*/

const isPromise = (maybePromise) => maybePromise instanceof Promise;

async function allSettled(promises = []) {
  let result = [];

  for (let promise of promises) {
    isPromise(promise)
      ? await promise
          .then((res) => {
            result.push({ status: "fullfiied", value: res });
          })
          .catch((err) => {
            result.push({ status: "rejected", reason: err });
          })
      : result.push({ status: "fullfiied", value: promise });
  }

  return result;
}

allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  3,
  new Promise((resolve) => {
    setTimeout(() => resolve(4), 1000);
  }),
]).then((res) => {
  console.log("__RES__", res);
});
