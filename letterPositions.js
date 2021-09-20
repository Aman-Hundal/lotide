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

const letterPositions = function(sentence) {
  let newString = sentence.toLowerCase();
  let letterObj = {};
  for (let char = 0; char < newString.length; char++) {
    let letterKey = newString[char];
    if (letterObj[letterKey] && letterKey !== " ") {
      letterObj[letterKey].push(char);
    } else if (letterObj[letterKey] === undefined && letterKey !== " ") {
      letterObj[letterKey] = [];
      letterObj[letterKey].push(char);
    }
  }
  return letterObj;
};

/* output -> returns all the indicies (zero basd) in the string where where character is found. For each letter -> multiple numbers may be needed to represent all the place in the string that the letter shows up (array?)
input -> receive a string
Steps -> 1. create a clean string and newObj 2. for loop through the characters 3. if the character is a key in the newObj -> push the char indicies to the array value 4. if the character key is not in the newObj -> create a new array and push the character indicies to the new array
*/

//test
// console.log(letterPositions("hello elliot"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello 21")[2], [6]);

module.exports = {
  letterPositions
};