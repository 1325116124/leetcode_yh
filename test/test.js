function chainPromise(promiseList, options) {
  // 写下你的逻辑
  const {limits} = options
  let limits2 = limits
  return new Promise((resolve,reject) => {
    const result = []
    promiseList.forEach(promise => {
      promise.then((res) => {
        result.push(res)
        if(res.length >= promiseList.length) resolve(result)
      }).catch(err => {
        while(limits2--) {
          promise.then(res => {
            result.push(res)
            limits2 = limits
            break
          },err => {
            if(limits2 === 0) {
              reject(err)
            }
          })
        }
      })
    })
  })
}
