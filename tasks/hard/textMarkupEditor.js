// Задача: написать функцию textMarkupEditor, которая преобразует текст с разметкой в HTML.
// Разметка:
// Заголовок: строка, начинающаяся с символа '=' (например, '= Заголовок' преобразуется в '<h1>Заголовок</h1>').
// Список: строки, начинающиеся с символа '*' (например, '* элемент списка' преобразуется в '<li>элемент списка</li>'). Несколько таких строк подряд образуют список, который должен быть обернут в теги '<ul>' и '</ul>'.
// Ссылка: текст в формате '((URL текст_ссылки))' (например, '((https://example.com Example))' преобразуется в '<a href="https://example.com">Example</a>').
// Параграфы: все остальные строки должны быть обернуты в теги '<p>' и '</p>'.
// Пустые строки игнорируются.
// Функция должна корректно обрабатывать несколько элементов разметки в одном тексте. 

const textMarkupEditor = (str) => {
  const result = [];
  const strArr = str.split("\n");

  let ulList = [];

  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];

    if (ulList.length > 0 && element[0] !== "*") {
      result.push(`<ul>${ulList.join("")}</ul>`);
      ulList = [];
    }

    if (element === "") {
      continue;
    }

    if (element[0] === "=") {
      result.push(`<h1>${element.slice(2)}</h1>`);
      continue;
    }

    if (element[0] === "*") {
      ulList.push(`<li>${element.slice(2)}</li>`);
      continue;
    }

    const splittedElement = element.split(/\(\((.*?)\)\)/);

    if (splittedElement.length === 3) {
      const [url, text] = splittedElement[1].split(" ");
      result.push(
        `<p>${splittedElement[0]}<a href="${url}">${text}</a>${splittedElement
          .slice(2)
          .join(" ")}</p>`
      );
    }
  }

  return result.join("");
};

// Пример теста:
const text = `
= head

text ((https://ya.ru link)) text.

* item
* item
`;

console.log(textMarkupEditor(text));
