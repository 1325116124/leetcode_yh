/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const path = []
  const res = []
  const traversal = function (startIndex,len) {
    if(len >= s.length && path.length === 4) {
      res.push(path.join("."))
      return
    }
    for(let i=startIndex;i<s.length;i++) {
      if(!isIP(s.substr(startIndex,i-startIndex+1))) break
      path.push(s.substr(startIndex,i-startIndex+1))
      traversal(i+1,len+i-startIndex+1)
      path.pop()
    }
  }
  const isIP = function (str) {
    if(str[0] === '0' && str.length > 1) return false
    if(parseInt(str) > 255 || parseInt(str) < 0) return false
    return true
  }
  traversal(0,0)
  return res
};
