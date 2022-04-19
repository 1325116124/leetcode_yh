/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 分为四个状态
    const len = prices.length
    const dp = new Array(len).fill().map(item => new Array(4).fill(0))
    dp[0][0] = -prices[0]
    for(let i=1;i<len;i++) {
        dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i-1][1], dp[i-1][3]) - prices[i]);
        dp[i][1] = Math.max(dp[i -1][1], dp[i - 1][3]);
        dp[i][2] = dp[i-1][0] + prices[i];
        dp[i][3] = dp[i-1][2];
    }
    return Math.max(dp[len-1][2],dp[len-1][1],dp[len-1][3])
};