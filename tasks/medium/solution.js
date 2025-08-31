/*
Задача:
Есть сообщения от сервера в формате:

interface Message {
    id: number
    text: string
}

Id самого первого сообщения = 1, а id каждого следующего сообщения на 1 больше, чем id предыдущего.
Нам нужно выводить сообщения в правильном порядке, однако сервер не гарантирует правильный порядок
сообщений, отправляемых в наше приложение.

Таймлайн:
(приходит) 7 1 2 3 6 5 4    8
(рисунок)   . 1 2 3 . . 4 5 6 7 8

Сообщения от сервера приходят в обработчик функции connect:

connect((msg) => {
    ...
});

Отображать сообщения нужно с помощью функции `render`:
render(msg)
*/

function connect(fn) {
  const data = [
    { id: 7, text: 7 },
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
    { id: 6, text: 6 },
    { id: 5, text: 5 },
    { id: 4, text: 4 },
  ];

  return data.forEach((msg) => {
    fn(msg);
  });
}

function render(msg) {
  console.log("Render: ", msg);
}

const solution = (connect, render) => {
  let currentId = 1;
  const mapa = {};

  connect((msg) => {
    mapa[msg.id] = msg.text;

    while (mapa[currentId]) {
      render(mapa[currentId]);
      mapa[currentId] = null;
      currentId++;
    }
  });
};

solution(connect, render);
