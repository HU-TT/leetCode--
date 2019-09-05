/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = []
    for (let i = 0; i < nums.length; i++) {
      let arr = nums
      let tmp = arr.splice(i, 1)
      for (let j = 0; j < arr.length; j++) {
        if (tmp[0] + arr[j] === target) {
          res.push([tmp[0], arr[j]])
        }
      }
    }
  return res  
};