/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length === 1) return true
  let res = nums[0]
  for(let i=0;i<=res;i++) {
    res = Math.max(i+nums[i],res)
    if(res >= nums.length-1) return true
  }
  return false
};
