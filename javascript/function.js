// вывести в консоли
// node javascript/function.js

// Function Declaration

// Function Expression

// Arrow Function Expression

"use strict";

const total = (prices) => {
  let amount = 0;
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

const goodsPrices = [1500, 25, 100, 10];

const amount = 100;
console.log({ amount });
{
  const amount = total(goodsPrices);
  console.log({ amount });
}
console.log({ amount });

/////////////////////////////////////////

let level = 1;
console.log(level); // 1

const f = () => {
  let level = 2;
  console.log(level); // 2

  {
    let level = 3;
    console.log(level); // 3
  }

  console.log(level); // 2
};

f();
