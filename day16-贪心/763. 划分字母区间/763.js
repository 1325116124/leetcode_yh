/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const arr = {}
  for(let i=0;i<s.length;i++) {
    arr[s[i]] = i
  }
  let end = arr[s[0]]
  const res = []
  let pre = 0
  for(let i = 0;i<s.length;i++) {
    if(end !== i) {
      end = Math.max(end,arr[s[i]])
    } else {
      res.push(end+1-pre)
      pre = end+1
      end = arr[s[i+1]]
    }
  }
  return res
};
