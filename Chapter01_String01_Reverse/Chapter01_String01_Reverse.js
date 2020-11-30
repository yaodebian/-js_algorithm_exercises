// method 01
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
console.log(reverse(1024)) // output: 4201


// method 02
/**
 * reverse a number
 * @param {number} x
 * @return {number}
 */
const reverse02 =  (x) => {
  // whether x is a number
  if (typeof x !== 'number') {
    throw new Error('Attribute x is not a number. Please enter a number.')
  }
  // set min or max value
  const MAX = 2147483647
  const MIN = -2147483648
  // get absolute value
  let absVal = Math.abs(x)
  // define variable 'res' which will return
  let res = 0

  // get every digits from right to left and set them from left to right.
  while (absVal !== 0) {
    res = (absVal % 10) + (res * 10)
    absVal = Math.floor(absVal/10)
  }
  // border situation
  if (res >= MAX && res <= MIN) {
    return 0
  }
  if (x < 0) {
    return res * -1
  }
  return res
}

// test
console.log(reverse02(1024)) // output: 4201