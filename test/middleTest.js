const middle = require('../middle').middle;
const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;

//test
console.log(middle([1])); // => [];
console.log(middle([1, 2])); // => [];
console.log(middle([1, 2, 3])); // => [2];
console.log(middle([1, 2, 3, 4, 5])); // => [3];
console.log(middle([1, 2, 3, 4])); // => [2, 3];
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4];

let newArray = middle([1,"hello","bye","birdie"]);
assertArraysEqual(newArray, ["hello","bye"]);

let testArray = middle((["whats it all about", 2, 3,"elliot alderson", 5, 6]));
assertArraysEqual(testArray, [3,"elliot alderson"]);