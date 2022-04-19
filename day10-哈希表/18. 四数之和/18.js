/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length
  if(len < 4) return []
  nums.sort((a,b) => a - b)
  const res = []
  for(let i=0;i<len-3;i++) {
    if(i > 0 && nums[i] === nums[i-1]) continue
    for(let k=i+1;k<len-2;k++) {
      if(k>i+1 && nums[k] === nums[k-1]) continue
      let right = len - 1
      let left = k + 1
      while(left < right) {
        const sum = nums[i] + nums[k] + nums[left] + nums[right]
        if(sum > target) {
          right--
        } else if(sum < target) {
          left++
        } else {
          res.push([nums[i],nums[k],nums[left],nums[right]])
          while(left < right && nums[left] === nums[++left]);
          while(left < right && nums[right] === nums[--right]);
        }
      }
    }
  }
  return res
};
