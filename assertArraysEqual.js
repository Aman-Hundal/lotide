const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let x = 0; x < arrayOne.length; x++) {
      if (arrayOne[x] !== arrayTwo[x]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅️✅️✅️Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

//test 
let hello = "hello";
let arrayOne = [1, 2, hello,5];
let arrayTwo = [1, 2, "hello", 5];

assertArraysEqual(arrayOne, arrayTwo);