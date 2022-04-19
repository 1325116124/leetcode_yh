/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const path = []
  const res = []
  const traversal = function (startIndex) {
    res.push([...path])
    for(let i=startIndex;i<nums.length;i++) {
      if(i>startIndex && nums[i] === nums[i-1]) continue
      path.push(nums[i])
      traversal(i+1)
      path.pop()
    }
  }
  nums.sort((a, b) => a-b)
  traversal(0)
  return res
};
