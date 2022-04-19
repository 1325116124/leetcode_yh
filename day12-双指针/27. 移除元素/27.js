/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // let fastIndex = 0
  // let slowIndex = 0
  // while(fastIndex<nums.length) {
  //   if(nums[slowIndex] === val) {
  //     if(nums[fastIndex] !== val) {
  //       [nums[fastIndex],nums[slowIndex]] = [nums[slowIndex],nums[fastIndex]]
  //       fastIndex++
  //       slowIndex++
  //     } else {
  //       fastIndex++
  //     }
  //   } else {
  //     fastIndex++
  //     slowIndex++
  //   }
  // }
  // return slowIndex

  let k = 0;
  for(let i = 0;i < nums.length;i++){
    if(nums[i] != val){
      nums[k++] = nums[i]
    }
  }
  return k;
};
