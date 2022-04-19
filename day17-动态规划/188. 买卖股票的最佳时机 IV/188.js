/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(prices.length === 0 || prices.length === 1) return 0
    const dp = new Array(prices.length + 1).fill(0).map(x => new Array(2*k+1).fill(0))
    for(let i=1;i<2*k;i+=2) {
        dp[0][i] = -prices[0]
    }
    for(let i=1;i<prices.length;i++) {
        for(let j=0;j<2*k+1;j++) {
            if(j === 0) dp[i][0] = dp[i-1][0]
            else {
                if(j % 2 === 0) {
                    dp[i][j] = Math.max(dp[i-1][j-1] + prices[i],dp[i-1][j])
                } else {
                    dp[i][j] = Math.max(dp[i-1][j-1] - prices[i],dp[i-1][j])
                }
            }
        }
    }
    return dp[prices.length-1][2*k]
};