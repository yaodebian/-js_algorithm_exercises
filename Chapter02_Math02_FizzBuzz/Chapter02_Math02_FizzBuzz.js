// method
/**
 * @param {number} n
 * @return {array}
 */
const fizzBuzz = function (n) {
  if (typeof n !== 'number' || n < 1 || String(n).indexOf('.') !== -1) {
    console.warn('n should be a integer greater than 1.')
  }
  const resArr = []
  for (let m = 1; m <= n; m++) {
    let res = ''
    if (m % 3 === 0) {
      res += 'Fizz'
    }
    if (m % 5 === 0) {
      res += 'Buzz'
    }
    if (!res) {
      res += m
    }
    resArr.push(res)
  }
  
  return resArr
}


// test
console.log(fizzBuzz(15)) 
/* output: 
[ '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz' 
]
*/
