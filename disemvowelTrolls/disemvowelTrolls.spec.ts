import { assert } from 'chai';

import { disemvowel } from './disemvowelTrolls';

describe('disemvowel', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(
      disemvowel('This website is for losers LOL!'),
      'Ths wbst s fr lsrs LL!'
    );
  });
});
