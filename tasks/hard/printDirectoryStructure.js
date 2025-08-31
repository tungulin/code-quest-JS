// Задача:
// Есть некая структура папок, их нужно отрисовать в консоли. Папки могут содержать детей и т.д. Чтобы не было рекурсии.
// Пример вывода:
// root
//  folder1
//   file1.txt
//   file2.txt
//   subfolder1
//    file3.txt
//  folder2
//   file4.txt
//  file5.txt

const directoryData = {
  name: "root",
  children: [
    {
      name: "folder1",
      children: [
        { name: "file1.txt" },
        { name: "file2.txt" },
        {
          name: "subfolder1",
          children: [{ name: "file3.txt" }],
        },
      ],
    },
    {
      name: "folder2",
      children: [{ name: "file4.txt" }],
    },
    { name: "file5.txt" },
  ],
};

const printDirectoryStructure = (data) => {
  const stack = [{ ...data, level: 0 }];

  while (stack.length > 0) {
    const node = stack.pop();

    console.log(" ".repeat(node.level) + node.name);

    if (node.children?.length > 0) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ ...node.children[i], level: node.level + 1 });
      }
    }
  }
};

printDirectoryStructure(directoryData);
