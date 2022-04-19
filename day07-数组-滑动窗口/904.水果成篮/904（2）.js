/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let r = 0
  let n = 0
  let l = 0
  let arr = [fruits[0]]
  let maxLength = 0
  for(let i=1;i<fruits.length;i++) {
    if(!arr.includes(fruits[i])) {
      if(arr.length === 1) {
        arr[1] = fruits[i]
      } else {
        l = n
        arr[0] = fruits[r-1]
        arr[1] = fruits[r]
      }
    }
    if(fruits[n] !== fruits[r]) {
      n = r
    }
    maxLength = Math.max(maxLength,r-l+1)
  }
  return maxLength
};
