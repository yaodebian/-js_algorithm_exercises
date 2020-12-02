// method 01
/**
 * @param {string} s
 * @return {boolean}
 */
const atoi = (s) => {
  const regExp = /^[-\+]?\d+/g
  let res = regExp.exec(s)[0]
  return res ? Math.max(Math.min(Number(res), Math.pow(2, 31) - 1), -Math.pow(2, 31))
    : 0
}

// test
console.log(atoi('-91283472332 haha')) // output: -2147483648


// method 02
/**
 * @param {string} s
 * @return {boolean}
 */
const atoi2 = (s) => {
  const news = s.trim()
  if (parseInt(news)) {
    return retrunNum(parseInt(news))
  } else {
    console.log(parseInt(news))
    return 0
  }
}

const retrunNum = function (num)  {
  if (num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1) {
    return num
  } else {
    return num > 0 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31)
  }
}

// test
console.log(atoi2('-91283472332 haha')) // output: -2147483648
