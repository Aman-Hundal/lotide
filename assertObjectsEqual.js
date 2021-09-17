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
const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length  !== objectTwoKeys.length) {
    return false;
  }
  for (let key of objectOneKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅️✅️✅️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd2, dc);
assertObjectsEqual(abc, cd);