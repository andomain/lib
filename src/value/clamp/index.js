/**
 * Restrict a number to within an upper/lower range
 * 
 * @param {number} val Input to be clamped
 * @param {Object} bounds 
 * @param {number} bounds.min Lower bound 
 * @param {number} bounds.max Upper bound 
 * 
 * @returns number
 */
const clamp = (val, {
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
} = {}) => Math.max(min, Math.min(val, max));

module.exports = clamp;
