const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;

//test 
let hello = "hello";
let arrayOne = [1, 2, hello, 5];
let arrayTwo = [1, 2, "hello", 5];

assertArraysEqual(arrayOne, arrayTwo);

let arrayThree = [1, 2, "Elliot", 5];
let arrayFour = [1, 2, "elliot", 5];

assertArraysEqual(arrayThree, arrayFour);