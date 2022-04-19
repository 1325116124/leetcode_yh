/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = []
  const path = []
  const traversal = function (startIndex) {
    if(startIndex >= s.length) {
      result.push([...path])
      return
    }
    for(let i=startIndex;i<s.length;i++) {
      if(!isPalindrome(s,startIndex,i)) continue
      path.push(s.substr(startIndex,i-startIndex+1))
      traversal(i+1)
      path.pop()
    }
  }
  traversal(0)
  return result
};

const isPalindrome = function (str,start,end) {
  while(start <= end) {
     if(str[start++] !== str[end--]) {
       return false
     }
  }
  return true
}
