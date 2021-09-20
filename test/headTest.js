const head = require('../head').head;
const assertEqual = require('../head').assertEqual;

assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), "Elliot");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");