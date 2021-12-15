/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {};
  for (let i = 0; i < t.length; i++) {
    if (!need[t[i]]) need[t[i]] = 0;
    need[t[i]]++;
  }
  let needCnt = t.length;
  let i = 0;
  let res = [0, Number.MAX_VALUE];
  for (let j = 0; j < s.length; j++) {
    if (need[s[j]] > 0) {
      needCnt -= 1;
    }
    if (isNaN(need[s[j]])) need[s[j]] = 0;
    need[s[j]] -= 1;
    if (needCnt === 0) {
      while (true) {
        if (need[s[i]] === 0) {
          break;
        }
        need[s[i]] += 1;
        i++;
      }
      if (j - i < res[1] - res[0]) {
        res[0] = i;
        res[1] = j;
      }
      need[s[i]] += 1;
      needCnt += 1;
      i++;
    }
  }
  return res[1] > s.length ? "" : s.substring(res[0], res[1] + 1);
};
