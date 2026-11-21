// // #region  Part 1,1
// // Convert the string "123" to a number and add 7. (0.5 Grade) • Output Example: 130

// var amr = "123";
// console.log(Number(amr) + 7);

// // #endregion

// #region  Part 1,2
// Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade) • Input Example: 0 •  Output Example: "Invalid"

//  the falsy value in js = "",0,null,nan,undefined,false

// var num = 0;
// if (!num) {
//   console.log("Invalid");
// }

// #endregion

// #region part 1,3
// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade) • Output Example:1, 3, 5, 7, 9

// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// #endregion

// #region part 1,4
// Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) • Input Example: [1, 2, 3, 4, 5] • Output Example: [2,4]

// var evenNum = [1, 2, 3, 4, 5];

// var res = evenNum.filter((evenNum) => {
//   return evenNum % 2 === 0;
// });
// console.log(res);

// #endregion

// #region part 1,5
// Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade) • Input Example: [1, 2, 3], [4, 5, 6] • Output Example: [1, 2, 3, 4, 5, 6]

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// var merg = [...arr1, ...arr2];
// console.log(merg);

// #endregion

// #region part 1,6
// Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade) • Input Example: 2 • Output Example: “Monday”

// var day = 2;

// switch (day) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tyuesday");
//     break;
// }

// #endregion

// #region part 1,7
// Create an array of strings and return their lengths using map method (0.5 Grade) • Input: ["a", "ab", "abc"] • Output Example: [1, 2, 3]

// var arr = ["a", "ab", "abc"];
// var res = arr.map((len) => {
//   return len.length;
// });

// console.log(res);

// #endregion

// #region part 1,8
// Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade) • Input Example: 15 • Output Example: “Divisible by both”

// var num = 15;
// function test() {
//   if (num / 5 == 3 && num / 3 == 5) {
//     console.log("Divisible by both");
//   } else {
//     console.log("erro");
//   }
// }
// test();

// #endregion

// #region part 1,9
// Write a function using arrow syntax to return the square of a number (0.5 Grade) • Input Example: 5 • Output Example: 25
// var num = 5;
// var fun = (num) => {
//   return num ** 2;
// };
// console.log(fun(num));

// #endregion

// #region part1,10
//  Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade) • Input Example: const person = {name: 'John', age: 25} • Output Example: 'John is 25 years old'

// const person = { name: "John", age: 25 };

// var { name, age } = person;
// console.log(name + " is " + age + " years old");

// console.log(person.name + " is " + person.age + " years old");

// #endregion

// #region part1,11
// . Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade) • Input Example: 1, 2, 3, 4, 5 • Output Example: 15

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// const res = sum(1, 2, 3, 4, 5);
// console.log(res);

// #endregion

// #region part1,12
// Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade) • Output Example: “Success”

// function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }
// test().then((res) => {
//   console.log(res);
// });

// #endregion

// #region part1,13
// Write a function to find the largest number in an array. (0.5 Grade) •  Input Example: [1, 3, 7, 2, 4] • Output Example: 7

// ???????????????????????????

// #endregion

// #region part1,14
// Write a function that takes an object and returns an array containing only its keys. (0.5 Grade) •  Input Example: name: "John", age: 30} •  Output Example: ["name", "age"]

// var test = { name: "John", age: 30 };

// function amr(obj) {
//   return Object.keys(obj);
// }
// console.log(amr(test));

// #endregion

// #region part1,15
// Write a function that splits a string into an array of words based on spaces. (0.5 Grade) • Input: "The quick brown fox" • Output: ["The", "quick", "brown", "fox"]
// var test = "The quick brown fox";

// function amr(params) {
//   return test.split(" ");
// }
// console.log(amr());

// #endregion
// -----------------------------------------------------------------------------------------------------------------------------

// #region part2,1
// What is the difference between forEach and for...of? When would you use each?
// forEach: make an order in all value . cant use continue/break . use it if you want edit all value
// for...of: loop. can use continue/break . use it if you want cheak only one value

// #endregion

// #region part2,2
// What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

// Hoisting :
// console.log(amr);
// var amr = 100;
// // in this case terminal will print undifinde becouse

// var amr;
// amr = 100;

// TDZ :
// var,let,const   ====> var maby but let,const no
// console.log(amr);   ====>undefined
// console.log(amr2);  ===> error

// var amr = "hello";
// let amr2 = "hello";

// #endregion

// #region part2,3
//  What are the main differences between == and ===?
// ==         >>> comparing value
// ===        >>> comparing value and data type
// #endregion

// #region part2,4
// Explain how try-catch works and why it is important in async operations

// we right code in try if we have error in code this error will be show in catch >>>> catch help us find the error

// #endregion

// #region part2,5
//  What’s the difference between type conversion and coercion? Provide examples of each.

// conversion:
// var amr = 100;
// var res = String(amr);
// console.log(amr);
// console.log(typeof res);
// انت الى بتحول بنفسك

// coercion :
// var amr = "52";
// var amr2 = 1;
// console.log(amr + amr2);
// ال jsالي بتحول تلقائي

// #endregion
