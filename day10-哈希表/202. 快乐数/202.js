/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const getSum = (num) => {
    let sum = 0
    while(num) {
      sum += (num % 10)**2
      num = Math.floor(num / 10)
    }
    return sum
  }
  let slow = n
  let fast = getSum(n)
  while(fast !== slow && fast !== 1 && getSum(fast) !== 1) {
    fast = getSum(getSum(fast))
    slow = getSum(slow)
  }
  return fast === 1 || getSum(fast) === 1

  // 使用哈希表判断是否重复
  // const set = new Set()
  // while(1) {
  //   const sum = getSum(n)
  //   if(sum === 1) return true
  //   if(set.has(sum)) {
  //     return false
  //   } else {
  //     set.add(sum)
  //     n = sum
  //   }
  // }
};
