const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    let middleIndex = array.length / 2;
    middleArray = array.slice(middleIndex, middleIndex + 1);
    return middleArray;
  } else {
    let middleIndex = Math.floor(array.length / 2) - 1;
    middleArray = array.slice(middleIndex, middleIndex + 2);
    return middleArray;
  }
};

module.exports = {
  middle
};