// 确定dp数组（dp table）以及下标的含义
// 确定递推公式
// dp数组如何初始化
// 确定遍历顺序
// 举例推导dp数组
function testWeightBagProblem(wight, value, size) {
    const len = wight.length, dp = new Array(size + 1).fill(0)
    for(let i=0;i<len;i++) {
        for(let j=size;j>=wight[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-wight[i]] + value[i])
        }
    }
    return dp[size]
  }
  
  
  function test () {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
  }
  
  test();