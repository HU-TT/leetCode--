/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  let max = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0, tmp; j <= i; j++) {
      tmp = nums[j]
      if (tmp > nums[j + 1]) {
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
      if (i <= nums.length - 1 && j <= i) {
        if (nums[i + 1] - nums[i] > max) {
          max = nums[i + 1] - nums[i]
        }
      }
      if (nums.length === 2) {
        max = nums[1] - nums[2]
      }
    }
  }
  return max
}

console.log(maximumGap([6,9,1, 5]))

// i 3     [ 3, 6, 9, 1 ]
//         [ 3, 6, 9, 1 ]
//         [ 3, 6, 1, 9 ]

// i 2     [ 3, 6, 1, 9 ]
//         [ 3, 1, 6, 9 ]

// i 1     [ 1, 3, 6, 9 ]
