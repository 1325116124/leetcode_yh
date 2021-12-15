/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0,
    fast = 0,
    n = nums.size();
  while (fast < n) {
    if (nums[fast]) {
      swap(nums[slow], nums[fast]);
      slow++;
    }
    fast++;
  }
};
