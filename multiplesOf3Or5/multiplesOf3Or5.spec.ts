import { assert } from 'chai';

import solution = require('./multiplesOf3Or5');

function test(num, expected) {
  assert.strictEqual(solution.Challenge.solution(num), expected);
}

describe('solution', function () {
  it('should handle basic tests', function () {
    test(10, 23);
    test(0, 0);
  });
});
