// method
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
const strStr = function (str1, str2) {
  if (!str2 || str2 === str1) {
    return 0
  }
  if (str2.length > str1.length) {
    return -1
  }
  for (let i = 0; i <= str1.length - str2.length; i++) {
    if (str1[i] !== str2[0] || str1[i + str2.length - 1] !== str2[str2.length - 1]) {
      continue
    }
    let temp = str1.slice(i, i + str2.length)
    if (temp === str2) {
      return i
    }
  }
  return -1
}

// test
console.log(strStr('hello world', 'll')) // output: 2
