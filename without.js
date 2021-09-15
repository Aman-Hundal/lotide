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

function without(sourceArray, itemsToRemoveArray) {
  let modArray = sourceArray.filter(function(item) {
    return !itemsToRemoveArray.includes(item)
  }) 
  return modArray
}

//test
console.log(without([1, 2, 3], [3,2,1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3",])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/* output = a new array with all the elements besides the elements mentioned in the second array
inputs = a base array with elements, and an array of items to remove from the baset array.

steps 1. create a modifiedArray as a blank 2. for loop through source array and if any items !== items in i from remove array = push them out. 3. return your new array */