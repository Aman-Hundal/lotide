const findKey = function(object,cb) {
  let keyArray = Object.keys(object);
  for (let key of keyArray) {
    if (cb(object[key])) {
      return key;
    }
  }
};



/* ouput-> return the first key for when the callback returns truthy; if no key found = undefined. THE CB FUNCTION TAKES IN A KEY AND RETURNS TRUE IF FOUND IN OBJ
input -> an object and a cb function
steps -> 1. create a list of keys 2. loop over each key 3. if object[key] return object[key]. */

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x["stars"] === 3)); // => "noma"

// const cb = function(x) {
//   return x["stars"] === 2;
// } // in your findKey code you are you are calling cb with the params of obkect[key]. the CB is exoecting a object key look up. objects key is represent as x[stars] in your check above.

module.exports = {
  findKey
};