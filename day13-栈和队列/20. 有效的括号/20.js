/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // const strArr = s.split("")
  // let stack = []
  // for(let i=0;i<strArr.length;i++) {
  //   if(strArr[i] === "(" || strArr[i] === "{" || strArr[i] === "[") {
  //     stack.push(strArr[i])
  //   } else {
  //     let res = stack.pop()
  //     if(strArr[i] === ")" && res === "(") {
  //       continue
  //     } else if(strArr[i] === "}" && res === "{") {
  //       continue
  //     } else if(strArr[i] === "]" && res === "[") {
  //       continue
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // if(stack.length === 0) return true
  // else return false

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    switch (c) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};
