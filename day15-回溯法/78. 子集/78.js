/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const path = []
  const len = nums.length
  const traversal = function (startIndex) {
    res.push([...path])
    console.log(path);
    if(startIndex >= nums.length) return
    for(let i=startIndex;i<len;i++) {
      path.push(nums[i])
      traversal(i+1)
      path.pop()
    }
  }
  traversal(0)
  return res
};
