/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if(nums1.length < nums2.length) {
    const _ = nums1
    nums1 = nums2
    nums2 = _
  }
  const temp = new Set(nums1)
  const resSet = new Set()
  for(let i=0;i<nums2.length;i++) {
    if(temp.has(nums2[i])) resSet.add(nums2[i])
  }
  return Array.from(resSet)
};
