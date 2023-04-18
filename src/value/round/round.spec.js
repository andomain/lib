const round = require('.');

describe('round', () => {
  it('rounds down to nearest n', () => {
    expect(round(123, 100)).toBe(100);
  });

  it('rounds up to nearest n', () => {
    expect(round(123, 25)).toBe(125);
  });

  it('leaves multiples of n', () => {
    expect(round(150, 50)).toBe(150);
  });
})