/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  let m = n.toString()
  m = m.split("").map(item => {
    return +item
  })
  let flag = Number.MAX_VALUE
  for(let i=m.length-1;i>0;i--) {
    if(m[i] < m[i-1]) {
      m[i-1]--
      flag = i
    }
  }
  for(let i=flag;i<m.length;i++) {
    m[i] = 9
  }
  return +m.join("")
};
