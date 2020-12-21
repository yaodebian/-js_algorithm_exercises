// method
/**
 * @param {array} list
 * @return {string}
 */
const longestCommonPrefix = function (list) {
  if (!(list instanceof Array)) {
    return
  }
  if (list.length === 1) {
    return list[0]
  }
  if (list.length === 2) {
    let resStr = ''
    let len = Math.min(list[0].length, list[1].length)
    for (let i = 0; i < len; i++) {
      if (list[0][i] !== list[1][i]) {
        return resStr
      }
      resStr += list[0][i]
    }
    return resStr
  }
  let prefixRes = longestCommonPrefix(list.slice(0, list.length - 1))
  return longestCommonPrefix([prefixRes, list[list.length - 1]])
}

// test
console.log(longestCommonPrefix(["flower","flow","flight"])) // output: fl

// method
/**
 * @param {array} list
 * @return {string}
 */
const longestCommonPrefix02 = function (list) {
  if (!(list instanceof Array)) {
    return
  }
  if (list.length === 1) {
    return list[0]
  }
  let resStr = ''
  let len = list[0].length
  for (let i = 1; i < list.length; i++) {
    if (len > list[i].length) {
      len = list[i].length
    }
  }
  for (let i = 0; i < len; i++) {
    const char = list[0][i]
    for (let j = 1; j < list.length; j++) {
      if (char !== list[j][i]) {
        return resStr
      }
    }
    resStr += char
  }
  return resStr
}

// test
console.log(longestCommonPrefix02(["flower","flow","flight"])) // output: fl
