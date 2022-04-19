/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let strArr = s.split("")
  let left = strArr.length-1
  let count = 0
  for(let i=0;i<strArr.length;i++) {
    if(strArr[i] === " ") count++
  }
  let right = left + count * 2
  while(left >= 0) {
    if(strArr[left] === " ") {
      console.log(123);
      strArr[right--] = "0"
      strArr[right--] = "2"
      strArr[right--] = '%'
      left--
    } else {
      strArr[right--] = strArr[left--]
    }
  }
  return strArr.join("")
};
