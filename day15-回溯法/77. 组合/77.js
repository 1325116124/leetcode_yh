/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const path = []
  const result = []
  const traversal = function (n,k,startIndex) {
    if(path.length === k) {
      result.push([...path])
      return
    }
    for(let i=startIndex;i<=n - (k - path.length) + 1;i++) {
      path.push(i)
      traversal(n,k,i+1)
      path.pop()
    }
  }
  traversal(n,k,1)
  return result
};


