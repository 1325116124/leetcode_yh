/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // const strArr = s.split("")
  // reverse(strArr,0,n-1)
  // reverse(strArr,n,strArr.length-1)
  // reverse(strArr,0,strArr.length-1)
  // return strArr.join("")

  const length = s.length;
  let i = 0;
  while (i < length - n) {
    s = s[length - 1] + s;
    i++;
  }
  return s.slice(0, length);
};

// function reverse(strArr,start,end) {
//   let left = start
//   let right = end
//   while(left<right) {
//     [strArr[left],strArr[right]] = [strArr[right],strArr[left]]
//     left++
//     right--
//   }
// }
