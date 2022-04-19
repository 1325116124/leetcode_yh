/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
  let res = []
  let que = []
  for(let i=0;i<k;i++) {
    myPush(que,nums[i])
  }
  console.log(que);
  res.push(que[0])
  for(let i = k;i<nums.length;i++) {
    if(que.length && que[0] === nums[i-k]) {
      que.shift()
    }
    myPush(que,nums[i])
    res.push(que[0])
  }
  return res
};

function myPush(arr,value) {
  while(arr.length) {
    let res = arr.pop()
    if(value > res) {
      continue
    } else {
      arr.push(res)
      break
    }
  }
  arr.push(value)
}
