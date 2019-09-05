/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  function grayArr (n) {
    if (n === 0) {
      return [0]
    } else if (n === 1) {
      return [0, 1]
    } else {
      let perv = grayArr(n - 1)
      let tmp = []
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = perv.length; i < len; i++) {
        tmp[i] = `0${perv[i]}`
        tmp[max - i] = `1${perv[i]}`
      }
      return tmp
    }  
  }
  return grayArr(n).map(item => parseInt(item, 2))
}

