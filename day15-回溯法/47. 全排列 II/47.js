/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  const path = []
  const used = []
  const traversal = function () {
    if(path.length === nums.length) {
      res.push([...path])
      return
    }
    for(let i=0;i<nums.length;i++) {
      if((i>0 && nums[i] === nums[i-1] && used[i-1] === false) || used[i]) continue
      used[i] = true
      path.push(nums[i])
      traversal(i+1)
      used[i] = false
      path.pop()
    }
  }
  nums.sort((a, b) => a-b)
  traversal()
  return res
};
