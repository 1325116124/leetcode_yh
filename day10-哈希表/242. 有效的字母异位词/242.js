/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  const arr = new Array(26).fill(0)
  const base = 'a'.charCodeAt()
  for(const key of s) {
    arr[key.charCodeAt() - base]++;
  }
  for(const key of t) {
    if(!arr[key.charCodeAt() - base]) return false;
    arr[key.charCodeAt() - base]--;
  }
  for(let i=0;i<arr.length;i++) {
    if(arr[i] !== 0) return false
  }
  return true
};
