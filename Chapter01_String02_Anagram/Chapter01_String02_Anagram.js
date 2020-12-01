// method 01
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  const sArr = s.split('')
  const tArr = t.split('')
  const sortFn = (a, b) => {
    return a.charCodeAt() - b.charCodeAt()
  }
  sArr.sort(sortFn)
  tArr.sort(sortFn)
  return sArr.join('') === tArr.join('')
}

// test
console.log(isAnagram('anagram', 'nagaram')) // input: true


// method 02
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  let countObj = {}
  for (const k of s) {
    countObj[k] = countObj[k] || 0
    countObj[k]++
  }
  for (const k of t) {
    if (!countObj[k]) {
      return false
    }
    countObj[k]--
  }
  return true
}

// test
console.log(isAnagram2('anagram', 'nagaram')) // input: true
