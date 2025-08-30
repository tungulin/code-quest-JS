/*
Задача:
Напишите функцию addTwoPromises, которая принимает два промиса и должна сложить результаты (числа) этих промисов независимо от их статуса выполнения.
*/

const addTwoPromises = async function (promise1, promise2) {
  const results = await Promise.allSettled([promise1, promise2]);
  return (
    results[0].value ||
    results[0].reason + results[1].value ||
    results[1].reason
  );
};

console.log(
  addTwoPromises(Promise.reject(3), Promise.resolve(2)).then((res) =>
    console.log(res)
  )
);
