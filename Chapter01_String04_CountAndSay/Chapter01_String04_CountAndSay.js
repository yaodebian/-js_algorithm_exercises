// method 01: Using recursion
/**
 * @param {number} n
 * @return {number}
 */
const countAndSay = (n) => {
  if (typeof n !== 'number' || n < 1 || n > 30) {
    throw new Error('n is an integer which is greater than or equal to 0, less than or equal to 30.')
  }
  n = Math.floor(n)
  if (n === 1) {
    return '1'
  }
  const numStrArr = String(countAndSay(n - 1)).split('')
  const numCount = [1]
  const numTag = [numStrArr[0]]
  for (let i = 1; i < numStrArr.length; i++) {
    if (numTag[numTag.length - 1] === numStrArr[i]) {
      numCount[numCount.length - 1]++
    } else {
      numCount.push(1)
      numTag.push(numStrArr[i])
    }
  }
  let res = ''
  for (let i = 0; i < numTag.length; i++) {
    res += `${numCount[i]}${numTag[i]}`
  }
  return res
}

// test
console.log(countAndSay(1)) // output: 1
console.log(countAndSay(2)) // output: 11
console.log(countAndSay(3)) // output: 21
console.log(countAndSay(4)) // output: 1211
console.log(countAndSay(5)) // output: 1211


// method 02: Using recursion
/**
 * @param {number} n
 * @return {number}
 */
const countAndSay2 = (n) => {
  if (typeof n !== 'number' || n < 1 || n > 30) {
    throw new Error('n is an integer which is greater than or equal to 0, less than or equal to 30.')
  }
  n = Math.floor(n)
  if (n === 1) {
    return '1'
  }
  const preResult = countAndSay(n - 1)

  return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
}

// test
console.log(countAndSay2(1)) // output: 1
console.log(countAndSay2(2)) // output: 11
console.log(countAndSay2(3)) // output: 21
console.log(countAndSay2(4)) // output: 1211
console.log(countAndSay2(5)) // output: 1211


// method 03: Using cycle
/**
 * @param {number} n
 * @return {number}
 */
const countAndSay3 = (n) => {
  let result = '1'
  for (let i = 0; i < n; i++) {
    result = result.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return result
}

// test
console.log(countAndSay3(1)) // output: 1
console.log(countAndSay3(2)) // output: 11
console.log(countAndSay3(3)) // output: 21
console.log(countAndSay3(4)) // output: 1211
console.log(countAndSay3(5)) // output: 1211
