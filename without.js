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
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let currentValue = sourceArray[i];
    let check = false;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (currentValue === itemsToRemoveArray[j]) {
        check = true;
      }
    }
    if (!check) {
      newArray.push(currentValue);
    }
  }
  return newArray;
}

//test
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3",])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/* output = a new array with all the elements besides the elements mentioned in the second array
inputs = a base array with elements, and an array of items to remove from the baset array.
steps 1. create a modifiedArray as a blank 2. for loop through source array and if any items !== items in i from remove array = push them out. 3. return your new array */

//LEARNING
//USE BOOLEAN VALUES T0 GET CONDITIONS MET OR NOT FOR FOR LOOPS. HAVE A BOOLEAN VALUE SET UP THAT WILL LET YOU KNOW IF YOUR CONDITION/CHECK/TARGET IS MET.
// LOOP SCOPING REMEMEBR THAT YOU CAN HAVE VARIABLES INSIDE THE PARENT/LOOP WHICH WILL RESET AFTER EVERY ITTERATION OF THE CHILD LOOPS.