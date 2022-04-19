/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map()
  for(const num1 of nums1) {
    for(const num2 of nums2) {
      let sum = num1 + num2
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  let count = 0;
  for(const num3 of nums3) {
    for(const num4 of nums4) {
      if(map.has(0-(num3+num4))) {
        count += map.get(0-(num3+num4))
      }
    }
  }
  return count
};
