const middle = require('../middle').middle;
const assert = require('chai').assert;

describe('#middle unit test', ()=> {
  it('should be middle two values if even array', function() {
    let input = ["whats it all about", 2, 3,"elliot alderson", 5, 6];
    assert.deepEqual(middle(input), [3,"elliot alderson"]);
  });
  it('should be middle value if odd array', function() {
    let input = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(input), [3]);
  });
  it('should not equal middle number if even array', function() {
    let input = [1, 2, 3, 4, 5, "elliot"];
    assert.notDeepEqual(middle(input), [3]);
  });
  it('should not equal middle two values if odd array', function() {
    let input = [1, 2, 3];
    assert.notDeepEqual(middle(input), [2,3]);
  });
});