/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // 自己实现的
    // const len = nums.length
    // const dp = new Array(len).fill(1)
    // let result = 1
    // for(let i=1;i<len;i++) {
    //     for(let j=i-1;j>=0;j--) {
    //         if(nums[i] > nums[j]) {
    //             if(dp[i] < dp[j] + 1) {
    //                 dp[i] = dp[j] + 1
    //                 break 
    //             } else {
    //                 dp[i] = dp[i]
    //             }
    //         }
    //         else break
    //     }
    //     result = Math.max(result,dp[i])
    // }
    // return result

    // 题解
    const len = nums.length
    const dp = new Array(len).fill(1)
    let result = 1
    for(let i=0;i<len-1;i++) {
        if(nums[i+1] > nums[i]) {
            dp[i+1] = dp[i] + 1
        }
        result = Math.max(result,dp[i+1])
    }
    return result
};