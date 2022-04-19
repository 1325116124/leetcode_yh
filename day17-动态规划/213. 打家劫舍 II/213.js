/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    const a = robFun(nums,0,nums.length-2)
    const b = robFun(nums,1,nums.length-1)
    return Math.max(a,b)
};

const robFun = (nums,start,end) => {
    const dp = new Array(nums.length).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start],nums[start + 1])
    for(let i=start+2;i<=end;i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i]) 
    }
    console.log(dp)
    return dp[end]
}
