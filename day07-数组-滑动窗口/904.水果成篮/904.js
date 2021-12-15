/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let l = 0;
  let n = 0;
  let maxLength = 0;
  let arr = [fruits[l]];
  for (let r = 0; r < fruits.length; r++) {
    if (!arr.includes(fruits[r])) {
      if (arr.length <= 1) {
        arr[1] = fruits[r];
      } else {
        l = n;
        arr[0] = fruits[r - 1];
        arr[1] = fruits[r];
      }
    }
    if (fruits[n] !== fruits[r]) {
      n = r;
    }
    maxLength = Math.max(maxLength, r - l + 1);
  }
  return maxLength;
};
