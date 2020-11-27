/**
 * reverse a number
 * @param {number} x
 * @return {number}
 */
const reverse =  (x) => {
  // whether x is a number
  if (typeof x !== 'number') {
    throw new Error('Attribute x is not a number. Please enter a number.')
  }
  // set min or max value
  const MAX = 2147483647
  const MIN = -2147483648
  // reverse
  const res = x > 0
    ? String(x)
      .split('')
      .reverse()
      .join('')
    : String(x)
      .slice(1)
      .split('')
      .reverse()
      .join('')
  // conver to normal num
  const result = x > 0 ? parseInt(res, 10) : 0 - parseInt(res, 10)
  // border situation
  if (result >= MIN && result <= MAX) {
    return result
  }
  return 0
}

// test
console.log(reverse(1024)) // output: 