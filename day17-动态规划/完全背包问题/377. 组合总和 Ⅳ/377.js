/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target+1).fill(0)
    dp[0] = 1
    for(let j=0;j<=target;j++) {
        for(let i=0;i<nums.length;i++) {
            if(j - nums[i] >= 0) dp[j] += dp[j-nums[i]]
        }
    }
    console.log(dp)
    return dp[target]
};