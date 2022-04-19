/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0
  let i = s.length-1
  for(let j=g.length-1;j>=0;j--) {
    if(i>=0 && s[i] >= g[j]) {
      res++
      i--
    }
  }
  return res
};
