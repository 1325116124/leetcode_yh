/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const path = []
  const res = []
  const used = []
  const traversal = function () {
    if(path.length === nums.length) {
      res.push([...path])
      return
    }
    for(let i=0;i<nums.length;i++) {
      if(used[i]) continue
      used[i] = true
      path.push(nums[i])
      traversal()
      path.pop()
      used[i] = false
    }
  }
  traversal()
  return res
};
