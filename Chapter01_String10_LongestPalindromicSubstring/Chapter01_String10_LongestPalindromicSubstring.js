// method
/**
 * determine whether str is a palindromic
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
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromicSubstring = function (s) {
  if (typeof s !== 'string') {
    return
  }
  if (s.length === 0 || s.length === 1) {
    return s
  }
  if (isPalindrome(s)) {
    return s
  }
  const palindromicList = [s[0]]
  for (let i = 0; i < s.length; i++) {
    const start = s[i]
    for (let j = i + 1; j < s.length - 1; j++) {
      if (start === s[j]) {
        const fragment = s.substring(i, j + 1)
        isPalindrome(fragment) ? palindromicList.push(fragment) : ''
      }
    }
  }
  let len = 0
  let index = 0
  for (let i = 0; i < palindromicList.length; i++) {
    if (palindromicList[i].length > len) {
      len = palindromicList[i].length
      index = i
    }
  }
  return palindromicList[index]
}

// test
console.log(longestPalindromicSubstring('babad')) // output: bab
console.log(longestPalindromicSubstring('babab')) // output: bab
console.log(longestPalindromicSubstring('a')) // output: bab

// method
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromicSubstring02 = function (s) {
  if (typeof s !== 'string') {
    return
  }
  if (s.length === 0 || s.length === 1) {
    return s
  }
  const dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
  }
  let len = 0, res = ''
  for (let l = 0; l < s.length; l++) {
    for (let i = 0; i + l < s.length; i++) {
      let j = i + l
      if (l === 0) {
        dp[i][j] = true
      } else if (l <= 2) {
        if (s[i] === s[j]) {
          dp[i][j] = true 
        } else {
          dp[i][j] = false
        }
      } else if (l > 2) {
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      }

      if (dp[i][j]) {
        const str = s.substring(i, j + 1)
        if (str.length > len) {
          len = str.length
          res = str
        }
      } 
    }
  }
  return res
}

// test
console.log(longestPalindromicSubstring02('babad')) // output: bab
console.log(longestPalindromicSubstring02('babab')) // output: bab
console.log(longestPalindromicSubstring02('a')) // output: bab

// method
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromicSubstring03 = function (s) {
  if (typeof s !== 'string') {
    return
  }
  if (s.length === 0 || s.length === 1) {
    return s
  }
  let start = 0, end = 0
  const expandFromCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }
  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(s, i, i)
    const len2 = expandFromCenter(s, i, i + 1)
    const len = Math.max(len1, len2)
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.substring(start, end + 1)
}

// test
console.log(longestPalindromicSubstring03('babad')) // output: bab
console.log(longestPalindromicSubstring03('babab')) // output: bab
console.log(longestPalindromicSubstring03('a')) // output: bab
