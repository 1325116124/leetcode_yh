/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1 || n === 2) return n;
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    for(let i=1;i<=n;i++) {
        for(let j=1;j<=2;j++) {
            if(i - j >= 0) dp[i] += dp[i - j]
        }
    }
    return dp[n]
  };