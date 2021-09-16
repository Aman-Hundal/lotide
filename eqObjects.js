const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  let objectOneKeys = Object.keys(object1); //objects method to call keys into an array (values method is another -> entries gives you boh key and value)
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length  !== objectTwoKeys.length) { // THIS IS A BLCOKING STATEMENTS. EASY OUT of function. if we have the keys of the objects in a arrray- if they truly are equal the keys have to be the same. if one obj has one key and another 2 keys they dont match -> move on
    return false; //this will get out of the function entireyl
  }
  for (let key of objectOneKeys) { // this will execute if the above blocking if does not execute.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // checks to see if any of the keys are arrays
      if (!eqArrays(object1[key],object2[key])) { // if above is true - then check to see if arrays are equal using our prior function. another block statement to check array equality essentially. This ends with if not equal arrays return false and go to primitive check
        return false;
      }
    }
    else if (object1[key] !== object2[key]) { // Finally we do our primitv check which looks to see if keys are not equal. We are looping throguh key arrays and aplying the key to the object to return the value. OBJECTS IN KEYS HAVE LOOK UPS WHEN USING OBJECT[KEY] its not like an key = 0 and key ++ every itteration.
      return false;
    }
  }
  return true;
};

//test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false