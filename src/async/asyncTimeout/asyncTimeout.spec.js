const asyncTimeout = require(".");

describe('asyncTimeout', () => {
  // TODO: Can we test without mocking the Race?
  it('returns a value on success', () => {
    const race = jest.spyOn(Promise, 'race');

    race.mockImplementationOnce(([input, timeoutErr]) => ({
      then: cb => cb(input())
    }));

    expect(asyncTimeout(() => 'success', 1000)).toBe('success');
  });
});