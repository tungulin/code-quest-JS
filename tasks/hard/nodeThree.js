// Задача:
// Дана древовидная структура следующего формата:
// const tree = {
//   type: 'nested',
//   children: [
//     { type: 'added', value: 42 },
//     {
//       type: 'nested',
//       children: [
//         { type: 'added', value: 43 },
//       ],
//     },
//     { type: 'added', value: 44 },
//     ...
//   ]
// };

// Необходимо написать функцию getNodes(tree, type), которая возвращает все ноды в порядке следования, соответствующие переданному типу.
// Глубина вложенности любая.
// const addedItems = getNodes(tree, 'added');

// [
//   { type: 'added', value: 42 },
//   { type: 'added', value: 43 },
//   { type: 'added', value: 44 },
// ]

const getNodes = (tree, type) => {
  if (tree.length === 0) {
    return [];
  }

  let stack = [tree];
  let result = [];

  while (stack.length !== 0) {
    const node = stack.pop();

    node.children?.forEach((newNode) => {
      if (newNode.type === type) {
        result.push(newNode.value);
      }

      if (newNode.children?.length > 0) {
        stack.push(newNode);
      }
    });
  }

  return result;
};

const result = getNodes(
  {
    type: "nested",
    children: [
      { type: "added", value: 42 },
      {
        type: "nested",
        children: [
          {
            type: "added",
            value: 43,
            children: [{ type: "added", value: 100 }],
          },
        ],
      },
      { type: "added", value: 44 },
    ],
  },
  "added"
);

console.log("result: ", result); // [{ type: "added", value: 42 }, { type: "added", value: 44 }, { type: "added", value: 43 } ]
