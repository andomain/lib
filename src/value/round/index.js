// https://www.tutorialspoint.com/how-to-round-up-to-the-nearest-n-in-javascript
/**
 * 
 * @param {number} num 
 * @param {number} factor Round to nearest multiple of factor
 * @returns number
 */
const round = (num, factor) => {
  const quotient = num / factor;
  return Math.round(quotient) * factor;
};

module.exports = round;