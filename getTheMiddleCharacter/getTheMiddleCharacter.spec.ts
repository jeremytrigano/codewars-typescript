import { assert } from 'chai';

import { getMiddle } from './getTheMiddleCharacter';

function test(string, expected) {
  assert.strictEqual(getMiddle(string), expected);
}

describe('solution', function () {
  it('should handle basic tests', function () {
    test('test', 'es');
    test('testing', 't');
  });
});
