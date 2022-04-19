function test_completePack() { 
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let nums = [2,3,2]
    let bagWeight = 10
    const dp = new Array(bagWeight + 1).fill(0)
    for(let i=0;i<weight.length;i++) {
        for(let j=bagWeight;j>=weight[i];j--) {
            for(let k=1;k<=nums[i] && (j - k * weight[i]) >= 0;k++) {
                dp[j] = Math.max(dp[j],dp[j - weight[i] * k] + value[i] * k)
            }
        }
    }
    console.log(dp[bagWeight])
}
test_completePack()