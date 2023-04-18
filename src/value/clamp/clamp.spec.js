const clamp = require('.');

describe('clamp', () => {
  it('limits a number to an upper bound', () => {
    expect(clamp(15, { min: 0, max: 10 })).toBe(10);
  });

  it('limits a number to a lower bound', () => {
    expect(clamp(-15, { min: 0, max: 10 })).toBe(0);
  });

  it('uses safe defaults', () => {
    expect(clamp(Number.MIN_SAFE_INTEGER - 1)).toBe(Number.MIN_SAFE_INTEGER);
    expect(clamp(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER);
  });
});
