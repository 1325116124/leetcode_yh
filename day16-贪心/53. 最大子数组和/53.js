/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 1) return nums[0]
  let res = Number.MIN_SAFE_INTEGER
  let cur = 0
  for(let i=0;i<nums.length;i++) {
    cur += nums[i]
    if(cur > res) res = cur
    if(cur < 0) {
      cur = 0
    }
  }
  return res
};
