import { assert } from 'chai';

import { crack } from './crackThePIN';

describe('ShouldPassAllOfThese', function () {
  it('Should work with simple PIN', function () {
    assert.deepEqual(crack('827ccb0eea8a706c4c34a16891f84e7b'), '12345');
  });
  it('Should work with harder PIN', function () {
    assert.deepEqual(crack('86aa400b65433b608a9db30070ec60cd'), '00078');
  });
});
