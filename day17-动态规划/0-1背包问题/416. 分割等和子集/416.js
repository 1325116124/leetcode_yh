/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0
    for(let i=0;i<nums.length;i++) {
        sum += nums[i]
    }
    if(sum % 2 === 1) return false
    const target = sum / 2
    const dp = new Array(20001).fill(0)
    for(let i=0;i<nums.length;i++) {
        for(let j=target;j>=nums[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-nums[i]] + nums[i])
        }
    }
    if(dp[target] === target) return true
    else return false

    //题解的代码：
    // const sum = (nums.reduce((p, v) => p + v));
    // if (sum & 1) return false;
    // const dp = Array(sum / 2 + 1).fill(0);
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = sum / 2; j >= nums[i]; j--) {
    //         dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    //         if (dp[j] === sum / 2) {
    //             return true;
    //         }
    //     }
    // }
    // return dp[sum / 2] === sum / 2;
};