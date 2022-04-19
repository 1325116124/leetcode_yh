function test_completePack() { 
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let nums = [2,3,2]
    let bagWeight = 10
    for(let i=0;i<nums.length;i++) {
        while(nums[i] > 1) {
            weight.push(weight[i])
            value.push(value[i])
            nums[i]--
        }
    }
    const dp = new Array(bagWeight+1).fill(0)
    for(let i=0;i<weight.length;i++) {
        for(let j=bagWeight;j>=weight[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-weight[i]] + value[i])
        }
    }
    console.log(dp[bagWeight])
}
test_completePack()