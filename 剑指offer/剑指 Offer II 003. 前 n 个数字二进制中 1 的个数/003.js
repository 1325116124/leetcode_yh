/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    for(let i=1;i<=n;i++) {
        if(i % 2 === 0) {
            dp[i] = dp[i/2]
        } else {
            dp[i] = dp[i-1] + 1
        }
    }  
    return dp
};
