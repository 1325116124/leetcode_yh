/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  const arrStr = Array.from(s)
  let count = 0
  for(let i=0;i<arrStr.length;i++) {
    if(arrStr[i] === " ") {
      count++
    }
  }
  let left = arrStr.length - 1
  let right = left + 2*count
  while(left >= 0) {
    if(arrStr[left] === ' ') {
      arrStr[right--] = '0'
      arrStr[right--] = '2'
      arrStr[right--] = '%'
      left--
    } else {
      arrStr[right--] = arrStr[left--]
    }
  }
  return arrStr.join("")
};

