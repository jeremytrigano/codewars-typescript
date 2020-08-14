import { assert } from 'chai';

import { Kata } from './stopGninnipsMySdrow';

describe('spinWords', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(
      Kata.spinWords('Hey fellow warriors'),
      'Hey wollef sroirraw'
    );
    assert.strictEqual(Kata.spinWords('This is a test'), 'This is a test');
    assert.strictEqual(
      Kata.spinWords('This is another test'),
      'This is rehtona test'
    );
  });
});
