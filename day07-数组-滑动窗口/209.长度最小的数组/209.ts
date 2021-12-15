function minSubArrayLen(target: number, nums: number[]): number {
  let len: number = nums.length;
  let l: number = 0,
    r: number = 0,
    sum: number = 0,
    res: number = len + 1; // 子数组最大不会超过自身
  while (r < len) {
    sum += nums[r++];
    // 窗口滑动
    while (sum >= target) {
      // r始终为开区间 [l, r)
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
}
