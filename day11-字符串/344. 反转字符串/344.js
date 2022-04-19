/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // let right = s.length - 1
  // let left = 0
  // while(left <= right) {
  //   const _ = s[left]
  //   s[left] = s[right]
  //   s[right] = _
  //   left++
  //   right--
  // }
  // return s

  let l = -1, r = s.length;
  while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
  return s
};
