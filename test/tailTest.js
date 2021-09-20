const tail = require('../tail').tail;
const assert = require('chai').assert;

describe('#tail unit test', ()=> {
  it("should remove the first elm from an array", function() {
    let input = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(input), ["Lighthouse", "Labs"]);
  });
  it("should not modify the original array", function() {
    let input = ["Yo Yo", "Lighthouse", "Labs"];
    assert.equal(input.length, 3);
  });
  it("should be a different array from original", function() {
    let input = ["Yo Yo", "Lighthouse", "Labs"];
    assert.notDeepEqual(tail(input), input);
  });
});