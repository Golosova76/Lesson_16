// вывести в консоли
// node javascript/array-object.js
"use strict";

const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "HDMI cable", price: 10 },
  ],
  Textile: [{ name: "Bag", price: 50 }],
};

console.log(purchase);

console.log({ purchase });

console.dir(purchase, { depth: null });

//console.log(purchase.Electronics); // выведет массив объектов Electronics
//console.log(purchase["Electronics"]); // выведет массив объектов Electronics

console.log(purchase.Electronics[2]); // выведет первый элемент массива Electronics { name: 'Laptop', price: 1500 }

console.log(purchase.Electronics[2].price); // 10 выведет значение ключа (поля) price в объекте

console.log(purchase.Electronics.length); // 3  длина массива Electronics

console.log(purchase.Electronics[3]); // undefined  такого элемента в массиве нет

console.log(purchase.Electronics.at(2)); // { name: 'HDMI cable', price: 10 }

console.log(purchase.Electronics.at(-1)); // { name: 'HDMI cable', price: 10 } с конца массива

const keys = Object.keys(purchase);
//console.log({ keys });

const entries = Object.entries(purchase);
//console.log({ entries });
