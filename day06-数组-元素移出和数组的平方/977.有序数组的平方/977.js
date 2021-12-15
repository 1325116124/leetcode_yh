/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let right = nums.length - 1;
  let left = 0;
  let pos = right;
  let ans = new Array(pos + 1);
  while (left <= right) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      ans[pos] = nums[left] * nums[left];
      left++;
    } else {
      ans[pos] = nums[right] * nums[right];
      right--;
    }
    pos--;
  }
  return ans;
};
