/**
 * Execute an async function/Promise and reject if timeout is exceeded
 *
 * @param {Promise} timedPromise
 * @param {Number} timeoutMs
 * @return {Promise}
 */
const asyncTimeout = (timedPromise, timeoutMs) => {
  if (!Number.isInteger(timeoutMs)) {
    throw new Error(`asyncTimeout must be called with integer timeout. Received ${timeoutMs} (${typeof timeoutMs})`);
  }

  let timerId;

  return Promise.race([
    timedPromise,
    new Promise((_, reject) => {      
      timerId = setTimeout(() => {
        console.log('EXPIRED');
        clearTimeout(timerId);
        reject();
      }, timeoutMs);
    }),
  ]).then((result) => {
    clearTimeout(timerId);
    return result;
  });
};

module.exports = asyncTimeout;