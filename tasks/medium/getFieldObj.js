/**
 * Задача:
 * Нужно написать функцию get.
 * На вход функция принимает объект и путь до поля объекта.
 * Путь — это строка, разделенная точкой.
 * Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */

function get(obj, path) {
  const pathArr = path.split(".");
  let copiedObj = JSON.parse(JSON.stringify(obj));
  let result = undefined;

  for (let i = 0; i <= pathArr.length - 1; i++) {
    if (!copiedObj?.[pathArr[i]]) {
      result = undefined;
      break;
    }

    if (i === pathArr.length - 1) {
      result = copiedObj[pathArr[i]];
      break;
    }

    copiedObj = copiedObj[pathArr[i]];
  }

  return result;
}

const obj = {
  a: {
    b: {
      c: "d",
    }, 
    e: "f",
  },
};

console.log(get(obj, "a.b")); // { c: 'd' }
console.log(get(obj, "a.b.x")); // undefined
