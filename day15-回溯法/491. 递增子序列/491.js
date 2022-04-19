/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = []
  const path = []
  const traversal = function (startIndex) {
    if(path.length > 1) {
      res.push([...path])
    }
    let used = []
    for(let i=startIndex;i<nums.length;i++) {
      if((path.length > 0 && nums[i] < path[path.length-1]) || used[nums[i] + 100]) {
        continue
      }
      used[nums[i] + 100] = true
      path.push(nums[i])
      traversal(i+1)
      path.pop()
    }
  }
  traversal(0)
  return res
};
