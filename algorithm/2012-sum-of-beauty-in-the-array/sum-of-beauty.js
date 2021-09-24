/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  let maximumFromLeft = [nums[0]]
  for (let i = 1; i < nums.length; ++i) maximumFromLeft.push(Math.max(nums[i], maximumFromLeft[i - 1]))
  let minFromRight = [nums[nums.length - 1]]
  for (let i = nums.length - 2; i >= 0; --i) minFromRight.unshift(Math.min(nums[i], minFromRight[0]))
  let result = 0
  for (let i = 1; i < nums.length - 1; ++i) {
    if (maximumFromLeft[i - 1] < nums[i] && minFromRight[i + 1] > nums[i]) {
      result += 2
    } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
      result += 1
    }
  }
  return result
};
