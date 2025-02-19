// вывести в консоли
// node javascript/types.js

"use strict";

const values = {
  name: "Mouse",
  price: 25,
  stock: false,
  avg: (a, b) => (a + b) / 2n,
  reference: null,
  primitive: undefined,
  numbers: [NaN, Infinity],
};

for (const key in values) {
  const value = values[key];
  const type = typeof value;
  //console.log({ key, value, type });
}

/*
{ key: 'name', value: 'Mouse', type: 'string' }
{ key: 'price', value: 25, type: 'number' }
{ key: 'stock', value: false, type: 'boolean' }
{ key: 'avg', value: [Function: avg], type: 'function' }
{ key: 'reference', value: null, type: 'object' }
{ key: 'primitive', value: undefined, type: 'undefined' }
{ key: 'numbers', value: [ NaN, Infinity ], type: 'object' }
*/

// Примитивные типы данных - 7!   typeof null выдаёт "object" (является объектоподобным) (ошибка языка, на самом деле null — это примитив).
// Ссылочный тип данных - 1!

// Примитивные типы данных
let nameString = "Mouse";
const typeString = typeof nameString;
console.log({ nameString, typeString }); // { nameString: 'Mouse', typeString: 'string' }

let nameNumber = 12;
const typeNumber = typeof nameNumber;
console.log({ nameNumber, typeNumber }); // { nameNumber: 12, typeNumber: 'number' }

let nameNaN = 0 / 0;
const typeNaN = typeof nameNaN;
console.log({ nameNaN, typeNaN }); // { nameNaN: NaN, typeNaN: 'number' }

let nameInfinity = 1 / 0;
const typeInfinity = typeof nameInfinity;
console.log({ nameInfinity, typeInfinity }); // { nameInfinity: Infinity, typeInfinity: 'number' }

let nameBoolean = false;
const typeBoolean = typeof nameBoolean;
console.log({ nameBoolean, typeBoolean }); // { nameBoolean: false, typeBoolean: 'boolean' }

let nameBigInt = 2n;
const typeBigInt = typeof nameBigInt;
console.log({ nameBigInt, typeBigInt }); // { nameBigInt: 2n, typeBigInt: 'bigint' }

let nameSymbol = Symbol("id");
const typeSymbol = typeof nameSymbol;
console.log({ nameSymbol, typeSymbol }); // { nameSymbol: Symbol(id), typeSymbol: 'symbol' }

let nameUndefined;
const typeUndefined = typeof nameUndefined;
console.log({ nameUndefined, typeUndefined }); // { nameUndefined: undefined, typeUndefined: 'undefined' }

let nameNull = null;
const typeNull = typeof nameNull;
console.log({ nameNull, typeNull }); // { nameNull: null, typeNull: 'object' }

// Ссылочный тип данных 'object'
let nameObjObject = { key: "value", number: 42 };
const typeObjObject = typeof nameObjObject;
console.log({ nameObjObject, typeObjObject }); // { nameObjObject: { key: 'value', number: 42 }, typeObjObject: 'object' }  // Object

let nameObjArray = [1, 2, 3, "hello"];
const typeObjArray = typeof nameObjArray;
console.log({ nameObjArray, typeObjArray }); // { nameObjArray: [ 1, 2, 3, 'hello' ], typeObjArray: 'object' }  // Array

let nameObjFunction = function () {
  return "I am a function";
};
const typeObjFunction = typeof nameObjFunction;
console.log({ nameObjFunction, typeObjFunction }); // функции являются подтипом object, но typeof для них сделан отдельным  // Function
/*
{ nameFuncFunction: [Function: nameFuncFunction], typeFuncFunction: 'function' }
*/

let nameObjDate = new Date("2025-02-19");
const typeObjDate = typeof nameObjDate;
console.log({ nameObjDate, typeObjDate }); // { nameObjDate: 2025-02-19T00:00:00.000Z, typeObjDate: 'object' } // Date

let nameObjRegex = /abc/i;
const typeObjRegex = typeof nameObjRegex;
const isRegexInstance = nameObjRegex instanceof RegExp; // RegExp — это конструктор для создания регулярных выражений. Регулярные выражения — это экземпляры (объекты), созданные с помощью RegExp
console.log({ nameObjRegex, isRegexInstance, typeObjRegex }); // { nameObjRegex: /abc/i, isRegexInstance: true, typeObjRegex: 'object' }  // Regex

let nameObjSet = new Set([1, 2, 3, "setValue"]);
const typeObjSet = typeof nameObjSet;
console.log({ nameObjSet, typeObjSet }); // { nameObjSet: Set(4) { 1, 2, 3, 'setValue' }, typeObjSet: 'object' }  // Set

let nameObjMap = new Map([
  ["key1", "value1"],
  ["key2", 42],
]);
const typeObjMap = typeof nameObjMap;
console.log({ nameObjMap, typeObjMap }); // { nameObjMap: Map(2) { 'key1' => 'value1', 'key2' => 42 }, typeObjMap: 'object' }  // Map
