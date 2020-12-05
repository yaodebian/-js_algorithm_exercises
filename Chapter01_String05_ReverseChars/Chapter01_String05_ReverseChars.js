// method 01
/**
 * @param {array} arr
 * @return {array}
 */
const charsReverse = (arr) => {
  for (let i = 0; i < arr.length - 1 - i; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr
}

// test
console.log(charsReverse(["h","e","l","l","o"])) // output: ["o","l","l","e","h"]

