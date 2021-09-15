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

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    let middleIndex = array.length / 2;
    middleArray = array.slice(middleIndex, middleIndex + 1);
    return middleArray;
  } else {
    let middleIndex = Math.floor(array.length / 2) - 1;
    middleArray = array.slice(middleIndex, middleIndex + 2);
    return middleArray;
  }
};

//test
console.log(middle([1])); // => [];
console.log(middle([1, 2])); // => [];
console.log(middle([1, 2, 3])); // => [2];
console.log(middle([1, 2, 3, 4, 5])); // => [3];
console.log(middle([1, 2, 3, 4])); // => [2, 3];
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4];

let newArray = middle([1,"hello","bye","birdie"]);
assertArraysEqual(newArray, ["hello","bye"]);