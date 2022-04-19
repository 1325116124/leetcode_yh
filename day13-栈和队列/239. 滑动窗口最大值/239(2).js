/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
  const n = nums.length
  const que = []
  const ans = []
  for(let i=0;i<k;i++) {
    while(que.length && nums[i] >= nums[que[que.length - 1]]) {
      que.pop()
    }
    que.push(i)
  }
  ans.push(nums[que[0]])
  for(let i=k;i<n;i++) {
    while(que.length && nums[i] >= nums[que[que.length - 1]]) {
      que.pop()
    }
    que.push(i)
    while(que[0] <= i - k) {
      que.shift()
    }
    ans.push(nums[que[0]])
  }
  return ans
};

