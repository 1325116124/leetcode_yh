/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const strArr = s.split("")
  removeExtraSpaces(strArr)
  reverse(strArr,0,strArr.length-1)
  let start = 0
  for(let i=0;i<strArr.length;i++) {
    if(strArr[i] === " ") {
      reverse(strArr,start,i-1)
      start = i+1
    }
  }
  reverse(strArr,start,strArr.length-1)
  return strArr.join("")
};
function removeExtraSpaces(strArr) {
  let fastIndex = 0
  let slowIndex = 0
  while(fastIndex < strArr.length) {
    if(strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex-1] === " ")) {
      fastIndex++
    } else {
      strArr[slowIndex++] = strArr[fastIndex++]
    }
  }
  strArr.length = strArr[slowIndex-1] === " " ? slowIndex - 1 : slowIndex
}
function reverse(strArr, start, end) {
  let left = start
  let right = end
  while(left < right) {
    [strArr[left],strArr[right]] = [strArr[right],strArr[left]]
    left++
    right--
  }
}
