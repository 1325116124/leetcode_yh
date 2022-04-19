/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // if(s.length > t.length) return false
    // const sLen = s.length
    // const tLen = t.length
    // const dp = new Array(sLen+1).fill().map(item => new Array(tLen+2).fill(0))
    // for(let i=1;i<=sLen;i++) {
    //     for(let j=1;j<=tLen;j++) {
    //         if(s[i-1] === t[j-1]) dp[i][j] = Math.max(dp[i-1][j-1] + 1)
    //         else dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
    //     }
    // }
    // return dp[sLen][tLen] === s.length
    let sPointer = 0,tPointer = 0
    while(tPointer !== t.length && sPointer !== s.length) {
        if(s[sPointer] === t[tPointer]) sPointer++
        tPointer++
    }
    return sPointer === s.length
};