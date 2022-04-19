/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const path = []
  const result = []
  let sum = 0;
  const traversal = function (candidates,target,startIndex) {
    if(sum > target) return
    if(sum === target) {
      result.push([...path])
      return
    }
    for(let i=startIndex;i<candidates.length && sum + candidates[i] <= target;i++) {
      if(i > startIndex && candidates[i] === candidates[i-1]) {
        continue
      }
      sum += candidates[i]
      path.push(candidates[i])
      traversal(candidates,target,i+1)
      sum -= candidates[i]
      path.pop()
    }
  }
  candidates.sort((a,b) => a-b)
  traversal(candidates,target,0)
  return result
};
