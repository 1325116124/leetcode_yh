/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = new Array(m+1).fill().map(item => new Array(n+1).fill(0))
    for(const str of strs) {
        let zeroNum = 0, oneNum = 0
        for(const s of str) {
            if(s === "0") zeroNum++
            else oneNum++
        }
        for(let i=m;i>=zeroNum;i--) {
            for(let j=n;j>=oneNum;j--) {
                dp[i][j] = Math.max(dp[i][j],dp[i-zeroNum][j-oneNum] + 1)
            }
        }
    }
    return dp[m][n]
};
