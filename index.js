const head = require('./head').head;
const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;
const eqArrays = require('./assertArraysEqual').eqArrays;
const assertEqual = require('./assertEqual').assertEqual;
const eqObjects = require('./assertObjectsEqual').eqObjects;
const assertObjectsEqual = require('./assertObjectsEqual').assertObjectsEqual;
const countLetters = require('./countLetters').countLetters;
const findKey = require('./findkey').findKey;
const findKeyByValue = require('./findKeyByValue').findKeyByValue;
const letterPositions = require('./letterPositions').letterPositions;
const myMap = require('./map').myMap;
const middle = require('./middle').middle;
const tail = require('./tail').tail;
const takeUntil = require('./takeUntil').takeUntil;
const without = require('./without').without;

module.exports = {
  head: head,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  myMap: myMap,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without
};