/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var largestSumAfterKNegations = function(nums, k) {
//   nums.sort((a,b) => Math.abs(a) - Math.abs(b))
//   let res = 0
//   for(let i=nums.length-1;i>=0,k>0;k--,i--) {
//     if(nums[i] < 0) {
//       nums[i] = -1 * nums[i]
//     }
//   }
//   if(k>0) {
//     if(k % 2 !== 0) nums[0] *= -1
//   }
//   for(const item of nums) {
//     res += item
//   }
//   return res
// };

var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a,b) => Math.abs(a) - Math.abs(b))
  let res = 0
  for(let i=nums.length-1;i>=0;i--) {
    if(nums[i] < 0 && k > 0) {
      k--
      res += -nums[i]
    } else {
      res += nums[i]
    }
  }
  if(k>0) {
    if(k % 2 !== 0) {
      res -= 2 * Math.abs(nums[0])
    }
  }
  return res
};
