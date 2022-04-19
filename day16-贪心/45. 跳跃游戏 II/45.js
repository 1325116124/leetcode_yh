/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length === 1) return 0
  let curIndex = 0
  let preIndex = 0
  let res = 0
  for(let i=0;i<nums.length - 1;i++) {
    preIndex = Math.max(preIndex,i+nums[i])
    if(i === curIndex) {
      res++
      curIndex = preIndex
    }
  }
  return res
};
