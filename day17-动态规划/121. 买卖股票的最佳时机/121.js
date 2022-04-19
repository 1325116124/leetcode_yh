/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    const dp = new Array(len + 1).fill().map(item => new Array(2).fill(0))
    dp[0][0] -= prices[0]
    for(let i=1;i<len;i++) {
        dp[i][0] = Math.max(dp[i-1][0],-prices[i])
        dp[i][1] = Math.max(prices[i] + dp[i-1][0],dp[i-1][1])
    }
    return dp[len-1][1]
};

// const maxProfit = prices => {
//     const len = prices.length;
//     // 创建dp数组
//     const dp = new Array(len).fill([0, 0]);
//     // dp数组初始化
//     dp[0] = [-prices[0], 0];
//     for (let i = 1; i < len; i++) {
//         // 更新dp[i]
//         dp[i] = [
//             Math.max(dp[i - 1][0], -prices[i]),
//             Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
//         ];
//     }
//     return dp[len - 1][1];
// };