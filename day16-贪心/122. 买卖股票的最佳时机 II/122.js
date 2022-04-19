/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0
  for(let i=0;i<prices.length-1;i++) {
    prices[i] = prices[i + 1] - prices[i]
    if(prices[i] > 0) res += prices[i]
  }
  return res
};
