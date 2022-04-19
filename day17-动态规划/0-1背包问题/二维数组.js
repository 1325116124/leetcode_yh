const weightBay = function (weight,value,size) {
  const len = weight.length,
      dp = new Array(len+1).fill([]).map(item => new Array(size+1).fill(0))
  for(let i=1;i<=len;i++) {
    for(let j=0;j<=size;j++) {
      if(weight[i-1] <= j) {
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight[i-1]] + value[i-1])
      } else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[len][size]
}

function test () {
  console.log(weightBay([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();

