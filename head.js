const assertEqual = require('./assertEqual').assertEqual;

const head = function(array) {
  return array[0];
};

module.exports = {
  head,
  assertEqual
};