/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length
  if(len < 3) return []
  nums.sort((a,b) => a - b)
  const arr = []
  for(let i=0;i<len;i++) {
    if(nums[i] > 0) break
    let left = i + 1
    let right = len - 1
    if(i > 0 && nums[i] === nums[i-1]) continue
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if(sum === 0) {
        arr.push([nums[i],nums[left],nums[right]])
        while(left < right && nums[right] === nums[--right]);
        while(left < right && nums[left] === nums[++left]);
      } else if(sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
};
