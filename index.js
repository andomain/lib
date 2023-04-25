const clamp = require('./src/value/clamp');
const round = require('./src/value/round');

const asyncTimeout = require('./src/async/asyncTimeout');

module.exports = {
  asyncTimeout,
  clamp,
  round,
}