// method
/**
 * @param {number} n
 * @return {number}
 */
const primeNumberCount = function (n) {
  if (typeof n !== 'number' || n < 1 || String(n).indexOf('.') !== -1) {
    console.warn('n should be a integer greater than 0.')
  }
  
  const primeNumberList = []

  for (let m = 2; m < n; m++) {
    if (m !== 2 && m % 2 === 0) {
      continue
    }
    const mid = Math.floor(m / 2)
    let flag = true
    for (let i = 2; i < mid; i++) {
      if (m % i === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      primeNumberList.push(m)
    }
  }
  
  return primeNumberList.length
}


// test
console.log(primeNumberCount(10)) // 4
console.log(primeNumberCount(15)) // 6

// method
/**
 * @param {number} n
 * @return {number}
 */
const primeNumberCount02 = function (n) {
  if (typeof n !== 'number' || n < 1 || String(n).indexOf('.') !== -1) {
    console.warn('n should be a integer greater than 0.')
  }
  
  const primeNumberList = []

  for (let m = 2; m < n; m++) {
    if (m !== 2 && m % 2 === 0) {
      continue
    }
    const border = Math.sqrt(m)
    let flag = true
    for (let i = 2; i <= border; i++) {
      if (m % i === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      primeNumberList.push(m)
    }
  }
  
  return primeNumberList.length
}


// test
console.log(primeNumberCount02(10)) // 4
console.log(primeNumberCount02(15)) // 6

