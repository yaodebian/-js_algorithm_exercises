// method
/**
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = function (str) {
  const normalStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  for (let i = 0; i < Math.ceil(normalStr.length / 2); i++) {
    if (normalStr[i] !== normalStr[normalStr.length - 1 - i]) {
      return false
    }
  }
  return true
}

// test
console.log(isPalindrome('A man, a plan, a canal: Panama')) // output: true
console.log(isPalindrome('hellea')) // output: false

// method
/**
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome2 = function (str) {
  const normalStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const reverseStr = normalStr.split('').reverse().join('')
  if (normalStr === reverseStr) {
    return true
  }
  return false
}

// test
console.log(isPalindrome2('A man, a plan, a canal: Panama')) // output: true
console.log(isPalindrome2('hellea')) // output: false
