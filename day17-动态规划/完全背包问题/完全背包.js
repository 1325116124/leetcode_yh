function test_completePack() { 
    let weight = [1, 3, 5]
    let value = [15, 20, 30]
    let bagWeight = 4
    let dp = new Array(bagWeight+1).fill(0)
    for(let i=0;i<value.length;i++) {
        for(let j=weight[i];j<=bagWeight;j++) {
            dp[j] = Math.max(dp[j],dp[j-weight[i]] + value[i])
        }
    }
    console.log(dp)
}
test_completePack()