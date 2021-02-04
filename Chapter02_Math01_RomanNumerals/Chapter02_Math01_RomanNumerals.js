// method
/**
 * @param {string} roman2Decimal
 * @return {number}
 */
const roman2Decimal = function (romanNumeral) {
  const dicts = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const combinations = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  let res = 0

  let singleStr = ''
  let lastIndex = 0
  let i = 0

  for (; i < romanNumeral.length; i++) {
    if (i + 2 <= romanNumeral.length) {
      let preTwo = romanNumeral.substring(i, i + 2)
      if (['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].indexOf(preTwo) > -1) {
        res += combinations[preTwo]
        singleStr += romanNumeral.substring(lastIndex, i)
        lastIndex = i + 2
        i = i + 1
        continue
      }
    }
  }
  singleStr += romanNumeral.substring(lastIndex, i)

  for (let item of singleStr) {
    res += dicts[item]
  }

  return res
}

// test
console.log(roman2Decimal('III')) // output: 3
console.log(roman2Decimal('XLI')) // output: 41
console.log(roman2Decimal('LVIII')) // output: 58
console.log(roman2Decimal('MCMXCIV')) // output: 1994


// method
/**
 * @param {string} roman2Decimal
 * @return {number}
 */
const roman2Decimal02 = function (romanNumeral) {
  let res = 0
  for (const item of romanNumeral) {
    switch (item) {
      case 'I': res += 1
      break
      case 'V': res += 5
      break
      case 'X': res += 10
      break
      case 'L': res += 50
      break
      case 'C': res += 100
      break
      case 'D': res += 500
      break
      case 'M': res += 1000
      break
    }
  }

  if (romanNumeral.includes('IV') || romanNumeral.includes('IX')) res -= 2
  if (romanNumeral.includes('XL') || romanNumeral.includes('XC')) res -= 20
  if (romanNumeral.includes('CD') || romanNumeral.includes('CM')) res -= 200

  return res
}

// test
console.log(roman2Decimal02('III')) // output: 3
console.log(roman2Decimal02('XLI')) // output: 41
console.log(roman2Decimal02('LVIII')) // output: 58
console.log(roman2Decimal02('MCMXCIV')) // output: 1994
