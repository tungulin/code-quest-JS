/*
  Задача:
  Написать свой Promise.All
*/

function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((resp) => {
          result[i] = resp;
          count++;

          if (count === functions.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
}

const func1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("done!"), 100));

console.log(promiseAll([func1]).then((res) => console.log("res", res)));
