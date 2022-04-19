/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const len = s.length
  let resArr = s.split("")
  for(let i=0;i<len;i+=2*k) {
    let left = i
    let right = i + k > len ? len : i + k - 1
    while(left < right) {
      [resArr[left],resArr[right]] = [resArr[right],resArr[left]]
      left++
      right--
    }
  }
  return resArr.join("")
};
