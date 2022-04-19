/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let res = 0
  let index = 0
  let res2 = 0
  for(let i=0;i<gas.length;i++) {
    res += gas[i] - cost[i]
    res2 += gas[i] - cost[i]
    if(res2 < 0) {
      index = i+1
      res2 = 0
    }
  }

  if(res < 0) return -1
  return index
};
