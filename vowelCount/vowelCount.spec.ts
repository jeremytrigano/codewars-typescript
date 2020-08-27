import { assert } from 'chai';

import { getCount } from './vowelCount';

describe('getCount', function () {
  it('should pass a sample test', function () {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});
