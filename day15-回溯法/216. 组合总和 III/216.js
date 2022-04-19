/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = []
  const path = []
  let sum = 0
  const traversal = function (k,n,startIndex) {
    if(sum > n) return
    if(path.length === k && sum === n) {
      result.push([...path])
      return
    }
    for(let i=startIndex;i<=9-(k-path.length)+1;i++) {
      path.push(i)
      sum += i
      traversal(k,n,i+1)
      path.pop()
      sum -= i
    }
  }
  traversal(k,n,1)
  return result
};
