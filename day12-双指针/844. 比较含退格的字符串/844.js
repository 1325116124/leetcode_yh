/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  if(compare(s.split("")) === compare(t.split(""))) return true
  else return false
};

function compare(s) {
  let k=0
  for(let i=0;i<s.length;i++) {
    if(s[i] !== "#") {
      s[k++] = s[i]
    } else {
      if(k === 0) continue
      else k--
    }
  }
  return s.slice(0,k).join("")
}

