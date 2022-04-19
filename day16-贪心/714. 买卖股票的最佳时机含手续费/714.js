/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let minPrice = prices[0]
  let sum = 0
  for(let i=1;i<prices.length;i++) {
    if(prices[i] < minPrice) minPrice = prices[i]
    if(prices[i] > minPrice && prices[i] - minPrice < fee) {
      continue
    }
    if(prices[i]-minPrice > fee) {
      sum += prices[i] - minPrice - fee
      minPrice = prices[i] - fee
    }
  }
  return sum
};
