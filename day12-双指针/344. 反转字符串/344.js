/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let r = s.length
  let l = -1
  while(++l < --r) {
    [s[l],s[r]] = [s[r],s[l]]
  }
  return s
};
