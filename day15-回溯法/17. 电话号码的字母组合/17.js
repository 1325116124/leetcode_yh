/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  const k = digits.length
  const arr = digits.split("")
  const result = []
  const path = []
  const traversal = function (digits,index) {
    if(path.length === k) {
      result.push([...path].join(""))
      return
    }
    const digit = arr[index] - '0'
    const letters = map[digit].split("")
    for(let i=0;i<letters.length;i++) {
      path.push(letters[i])
      traversal(digits,index + 1)
      path.pop()
    }
  }
  if (digits.length == 0) {
    return result;
  }
  traversal(digits,0)
  return result
};
