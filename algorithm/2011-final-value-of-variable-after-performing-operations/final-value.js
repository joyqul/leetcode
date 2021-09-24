/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0
  for (const op of operations) {
    if (op === '++X' || op === 'X++') result = result + 1
    else result = result - 1
  }
  return result

};
