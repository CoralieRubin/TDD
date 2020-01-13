const assert = require('assert');
const rectangle = require('../Rectangle');

describe('rectangle', () => {
  it('returns true when sides are the same size', () => {
    const area = new rectangle(5, 5);
    assert.strictEqual(area.isSquare(), true);
  });
  it('returns false when sides are not the same size', () => {
    const area = new rectangle(1, 5);
    assert.strictEqual(area.isSquare(), false);
  });
  it('returns the rectangle area', () => {
    const area = new rectangle(13, 7);
    assert.strictEqual(area.getArea(), 91);
  });
  it('returns the rectangle perimeter m', () => {
    const area = new rectangle(13, 7);
    assert.strictEqual(area.getPerimeter(), 40);
  });
});
