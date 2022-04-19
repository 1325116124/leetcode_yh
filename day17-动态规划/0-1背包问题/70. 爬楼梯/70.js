/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 1 || n === 2) return n
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for(let i=3;i<=n;i++) {
    let sum = dp[1] + dp[2]
    dp[1] = dp[2]
    dp[2] = sum
  }
  return dp[n]
};
