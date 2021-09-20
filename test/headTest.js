const head = require('../head').head;
const assert = require('chai').assert;

describe("#head testing", ()=> {
  it('returns 1 for [1,2,3]', function() {
    let input = [1,2,3];
    assert.strictEqual(head(input), 1);
  });
  it('returns 5 for [5]', function() {
    let input = [5];
    assert.strictEqual(head(input), 5);
  });
  it('returns undefined for []', function() {
    let input = [];
    assert.strictEqual(head(input), undefined);
  });
  it('should fail if head[0] does not match', function() {
    let input = ["Alderson",6,7];
    assert.notEqual(head(input), "Elliot");
  });
});