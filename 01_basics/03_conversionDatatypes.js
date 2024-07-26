// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let score = "Nikhil"
console.log(typeof score); //string
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = "nikhil"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " nikhil"
let str3 = str1 + str2
console.log(str3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);