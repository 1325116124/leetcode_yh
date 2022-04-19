/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  // const strArr = s.split("")
  // let stack = []
  // let pre = ""
  // for(let i=0;i<strArr.length;i++) {
  //   if(pre !== strArr[i]) {
  //     stack.push(strArr[i])
  //     pre = strArr[i]
  //   } else {
  //     stack.pop()
  //     pre = stack.pop()
  //     stack.push(pre)
  //   }
  // }
  // return stack.join("")

  const stack = [];
  for(const x of s) {
    let c = null;
    if(stack.length && x === (c = stack.pop())) continue;
    c && stack.push(c);
    stack.push(x);
  }
  return stack.join("");
};
