/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 状态0：什么也不做
    // 状态1：第一次买入
    // 状态2：第一次卖出
    // 状态3：第二次买入
    // 状态4：第二次卖出
    const dp = new Array(prices.length + 1).fill([0,0,0,0,0])
    dp[0][1] = -prices[0]
    for(let i=1;i<prices.length;i++) {
        dp[i][0] = dp[i-1][0]
        dp[i][1] = Math.max(dp[i-1][0] - prices[i],dp[i-1][1])
        dp[i][2] = Math.max(dp[i-1][1] + prices[i],dp[i-1][2])
        dp[i][3] = Math.max(dp[i-1][2] - prices[i],dp[i-1][3])
        dp[i][4] = Math.max(dp[i-1][3] + prices[i],dp[i-1][4])
    }
    return dp[prices.length-1][4]
};