// method
/**
 * @param {string} str
 * @return {string}
 */
const findUniqueCharacter = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]
    }
  }
  return ''
}

// test
console.log(findUniqueCharacter('hello')) // output: h

// method
/**
 * @param {string} str
 * @return {string}
 */
const findUniqueCharacter2 = function (str) {
  const countObj = {}
  for (let c of str) {
    countObj[c] = countObj[c] || 0
    countObj[c]++
  }
  for (let c of str) {
    if (countObj[c] === 1) {
      return c
    }
  }
  return ''
}

// test
console.log(findUniqueCharacter2('hello')) // output: h
