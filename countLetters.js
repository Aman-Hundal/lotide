const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let newString = sentence.split(" ").join("").toLowerCase(); //LEARNING NOTE -> CLEAN UP YOUR DATA SO THAT IT CAN EASILY BE USED IN YOUR CODE/LOOPS BEFORE YOU BEGIN THE ACTUAL LOOPING AND CODING. MAKES IT MUCH EASIER
  let letterObj = {};
  for (let char of newString) {
    if (letterObj[char]) {
      letterObj[char] += 1;
    } else {
      letterObj[char] = 1;
    }
  }
  return letterObj;
};

/* output -> return an object with the count of each of the letters in the passed in sentence
input -> a sentence
Steps -> 1. create an empty object + create a new sentence that has no spaces and all lowercase
2. Loop through each charcater
3. see if character exists in newObject as a key and if character !== " " if it does +=1 to its value
4. if the key does not exist and !== " "; create a new key to the newObject and make it equal 1 */

// test
// console.log(countLetters("lighthouse in the house"));
// console.log({
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// });
// const result = countLetters("lighthouse in the house");
// assertEqual(result, {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }); // will not work as our assertEqual cannot compare objects at this stage
// console.log(countLetters("lighthouse in the house 5 5"));

module.exports = {
  countLetters
};