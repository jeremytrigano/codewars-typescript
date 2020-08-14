import { assert } from 'chai';

import { digitalRoot } from './sumOfDigitsDigitalRoot';

describe('solution', function () {
  it('should work for basic tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});
