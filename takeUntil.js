const takeUntil = function(array, cbPredicate) {
  let stopIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (cbPredicate(array[i])) {
      stopIndex = i;
      break;
    }
  }
  return array.slice(0, stopIndex);
};

/* ouput -> a slice of the array with elements talen from the beginning. IT SHOULD KEEP GOING UNTIL THE CALLBACK RETURNS A TRUTHY VALUE
inputs -> an array  + a CB given only value -> the item in the array that you want to stop on?
overall-> the function will keep collecting items from an array UNTIL the callback returns truthy value (if item is true)
*/

// //test
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = {
  takeUntil
};