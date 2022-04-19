/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if(ransomNote.length > magazine.length) return false
  const arr = new Array(26).fill(0)
  const base = 'a'.charCodeAt()
  for(const key of magazine) {
    arr[key.charCodeAt() - base]++;
  }
  for(const key of ransomNote) {
    if(!arr[key.charCodeAt() - base]) return false;
    arr[key.charCodeAt() - base]--;
  }
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] < 0) return false
  }
  return true
};
