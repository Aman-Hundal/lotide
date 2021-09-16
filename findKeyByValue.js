const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

function findKeyByValue(obj,value) {
  let arrayKeys = Object.keys(obj);
  for (let key of arrayKeys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

/* Goal -> return the first key from the passed in obj from the given value. If no key is found return undefined
input -> an object, and a string value
Steps ->
1. create an array of keys using Object.keys() 2. for loop through key array 3. check to see if obj[key] === val ; if true return obj[key] 4. if false return obj[key]
*/

//test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);