let ans = function sortedSquares(nums: number[]): number[] {
  let res: Array<number> = nums.map((item) => item * item);
  res.sort((a, b) => a - b);
  return res;
};
