/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const res = new Array(ratings.length).fill(1)
  for(let i=1;i<ratings.length;i++) {
    if(ratings[i] > ratings[i-1]) {
      res[i] = res[i-1] + 1
    }
  }
  for(let i=ratings.length-2;i>=0;i--) {
    if(ratings[i] > ratings[i+1]) {
      res[i] = Math.max(res[i],res[i+1] + 1)
    }
  }
  let result = 0
  for(const item of res) {
    result += item
  }
  return result
};
