const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  }
  return results;
}

const result1  = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false});

//test
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

/* Goal -> return an object containing counts of everything that the input object lister -> return counts for a specific subset of those items. IT WONT COUNT EVERYTHING -> ONLY COUNT ITEMS WE CARE ABOUT 
input -> take in a collection of items AND what items we careabout/ want to count.
input - an array and an object
Steps -> Will need an object to hold the speicifc subset and its count. For loops through the items and add to the object as well as its counts. If object existed just += 1 and if object does not exist -> add the property and add to count
1. create an empty object 2. for loop through the object keys and array 3. if object key === array add +1 to new object 

*/

