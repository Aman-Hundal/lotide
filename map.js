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
const myMap = function(array, callback) {
  const resultArray = [];
  for (let elm of array) {
    resultArray.push(callback(elm));
  }
  return resultArray;
};

// test
const words = ["ground", "control", "to", "major", "tom"];
const results1 = myMap(words, word => word[0]);
assertArraysEqual(results1, ["g","c","t","m","t"]);

const array2 = [3,4,5,6];
const array3 = ["hello"];
const array4 = ["geoff","mikasa","aman"];
assertArraysEqual(myMap(array2, x=> x * 2), [6,8,10,12]);
const result2 = myMap(array4, function(elm) {
  return "hello " + elm
})
assertArraysEqual(result2, ["hello geoff", "hello mikasa", "hello aman"])