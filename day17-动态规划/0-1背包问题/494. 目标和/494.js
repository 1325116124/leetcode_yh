/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a,b) => a + b)
    if(sum < Math.abs(target)) return 0
    if((sum + target) % 2 === 1) return 0;
    const bagSize = (sum + target) / 2;
    let dp = new Array(bagSize+1).fill(0);
    dp[0] = 1
    for(let i=0;i<nums.length;i++) {
        for(let j=bagSize;j>=nums[i];j--) {
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[bagSize]
};
