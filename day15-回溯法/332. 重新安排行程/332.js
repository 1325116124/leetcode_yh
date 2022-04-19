/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const res = ["JFK"]
  const map = {}
  for(const ticket of tickets) {
    const [from,to] = ticket
    if(!map[from]) {
      map[from] = []
    }
    map[from].push(to)
  }
  for(const city in map) {
    map[city].sort()
  }
  const dfs = function (city,used) {
    if(used===tickets.length) {
      return true
    }
    const nextCities = map[city]
    if(!nextCities || nextCities.length === 0) {
      return false
    }
    for(let i=0;i<nextCities.length;i++) {
      const next = nextCities[i]
      nextCities.splice(i,1)
      res.push(next)
      if(dfs(next,used+1)) {
        return true
      } else {
        nextCities.splice(i,0,next)
        res.pop()
      }
    }
  }
  dfs("JFK",0)
  return res
};
