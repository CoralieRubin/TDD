const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  // give the test a label using it
  it('is a function ', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(
      capitalizeFirstLetters('i am learning TDD and it is hard'),
      'I Am Learning TDD And It Is Hard',
    );
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
