/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [], queue = []
  queue.push(root)
  if(root === null) {
    return res
  }
  while(queue.length) {
    const temp = []
    const length = queue.length
    for(let i=0;i<length;i++) {
      const node = queue.shift()
      temp.push(node.val)
      if(node.children.length) {
        for(let j=0;j<node.children.length;j++) {
          queue.push(node.children[j])
        }
      }
    }
    res.push(temp)
  }
  return res
};
