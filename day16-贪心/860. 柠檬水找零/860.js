/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const money = new Array(2).fill(0)
  for(let i=0;i<bills.length;i++) {
    if(bills[i] === 5) {
      money[0]++
    } else if(bills[i] === 10) {
      if(money[0] > 0) {
        money[0]--
        money[1]++
      } else {
        return false
      }
    } else {
      if(money[0] > 0 && money[1] > 0) {
        money[0]--
        money[1]--
      } else if(money[0] >= 3) {
        money[0] -= 3
      } else {
        return false
      }
    }
  }
  return true
};
