Задание 8

  // Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
  // Используйте шаблонные строки.

let arMap = new Map([
    ["color", "red"],
    ["true?", true],
    [1, false]
    ])
     for ( let item of arMap ){
       console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
     } 